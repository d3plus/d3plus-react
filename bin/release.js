#! /usr/bin/env node

const execAsync = require("./execAsync"),
      {execSync} = require("child_process"),
      github = require("@octokit/rest")(),
      shell = require("shelljs"),
      token = shell.env.GITHUB_TOKEN,
      {name, version} = JSON.parse(shell.cat("package.json"));

shell.config.silent = true;
const log = require("../node_modules/d3plus-dev/bin/log")(`release v${version}`);

let minor = version.split(".");
const prerelease = parseFloat(minor[0]) === 0;
minor = minor.slice(0, minor.length - 1).join(".");

execSync("npm test", {stdio: "inherit"});
log.done();
execSync("npm run docs", {stdio: "inherit"});
let commits = "";

log.timer("compiling release notes");
execAsync("git log --pretty=format:'* %s (%h)' `git describe --tags --abbrev=0`...HEAD")
  .then(stdout => {
    commits = stdout;
    log.timer("publishing npm package");
    return execAsync("npm publish ./");
  })
  .then(() => {
    log.timer("commiting all modified files for release");
    return execAsync("git add --all");
  })
  .then(() => execAsync(`git commit -m \"compiles v${version}\"`))
  .then(() => {
    log.timer("tagging latest commit");
    return execAsync(`git tag v${version}`);
  })
  .then(() => {
    log.timer("pushing to repository");
    return execAsync("git push origin --follow-tags");
  })
  .then(() => {
    log.timer("publishing release notes");
    github.authenticate({type: "oauth", token});
    return github.repos.createRelease({
      owner: "d3plus",
      repo: name,
      tag_name: `v${version}`,
      name: `v${version}`,
      body: commits,
      prerelease
    });
  })
  .then(() => {
    log.exit();
    shell.exit(0);
  })
  .catch(err => {
    log.fail(err);
    log.exit();
    shell.exit(1);
  });

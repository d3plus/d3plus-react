#! /usr/bin/env node

const execAsync = require("./execAsync"),
      {execSync} = require("child_process"),
      fs = require("fs"),
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
execSync("npm run build", {stdio: "inherit"});

/**
    Final steps for release.
    @private
**/
function finishRelease() {

  log.done();
  execSync("npm run examples", {stdio: "inherit"});
  execSync("npm run docs", {stdio: "inherit"});
  let commits = "", releaseUrl = "", zipSize = 0;

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
      log.timer("attaching .zip distribution to release");
      return github.repos.getReleaseByTag({
        owner: "d3plus",
        repo: name,
        tag: `v${version}`
      });
    })
    .then(release => {
      releaseUrl = release.data.upload_url;
      zipSize = fs.statSync(`build/${name}.zip`).size;

      return github.repos.uploadAsset({
        url: releaseUrl,
        file: fs.createReadStream(`build/${name}.zip`),
        contentType: "application/zip",
        contentLength: zipSize,
        name: `${name}.zip`,
        label: `${name}.zip`,
        owner: "d3plus",
        repo: name
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

}

if (shell.test("-d", "../d3plus-website")) {
  log.timer("uploading builds to d3plus.org");
  shell.cp(`build/${name}.js`, `../d3plus-website/js/${name}.v${minor}.js`);
  shell.cp(`build/${name}.min.js`, `../d3plus-website/js/${name}.v${minor}.min.js`);
  shell.cd("../d3plus-website");
  execAsync(`git add js/${name}.v${minor}.js js/${name}.v${minor}.min.js`)
    .then(() => execAsync(`git commit -m \"${name} v${version}\"`))
    .then(() => execAsync("git push"))
    .then(() => {
      shell.cd(`../${name}`);
      finishRelease();
    })
    .catch(() => {
      shell.cd(`../${name}`);
      finishRelease();
    });
}
else {
  log.done();
  log.warn("d3plus-website repository folder not found in parent directory, builds cannot be uploaded to d3plus.org");
  finishRelease();
}

#! /usr/bin/env node
const release = require("grizzly"),
      shell = require("shelljs"),
      token = shell.env.GITHUB_TOKEN,
      {name, version} = JSON.parse(shell.cat("package.json"));

shell.config.silent = true;
const log = require("../node_modules/d3plus-dev/bin/log")(`release v${version}`);

let minor = version.split(".");
const prerelease = parseFloat(minor[0]) === 0;
minor = minor.slice(0, minor.length - 1).join(".");

const tests = shell.exec("d3plus-test", {silent: false});
if (tests.code) shell.exit(tests.code);

function kill(code, stdout) {
  log.fail();
  shell.echo(stdout);
  shell.exit(code);
}

log.timer("compiling documentation");
shell.exec("npm run docs", (code, stdout) => {
  if (code) kill(code, stdout);

  log.timer("compiling release notes");
  shell.exec("git log --pretty=format:'* %s (%h)' `git describe --tags --abbrev=0`...HEAD", (code, stdout) => {
    const body = stdout;

    log.timer("publishing npm package");
    shell.exec("npm publish ./", (code, stdout) => {
      if (code) kill(code, stdout);

      log.timer("commiting all modified files for release");
      shell.exec("git add --all", (code, stdout) => {
        if (code) kill(code, stdout);

        shell.exec(`git commit -m \"compiles v${version}\"`, (code, stdout) => {
          if (code) kill(code, stdout);

          log.timer("tagging latest commit");
          shell.exec(`git tag v${version}`, (code, stdout) => {
            if (code) kill(code, stdout);

            log.timer("pushing to repository");
            shell.exec("git push origin --follow-tags", (code, stdout) => {
              if (code) kill(code, stdout);

              log.timer("publishing release notes");
              release(token, {
                repo: name,
                user: "d3plus",
                tag: `v${version}`,
                name: `v${version}`,
                body, prerelease
              }, error => {
                if (error) {
                  log.fail();
                  shell.echo(`repo: ${name}`);
                  shell.echo(`tag/name: v${version}`);
                  shell.echo(`body: ${body}`);
                  shell.echo(`prerelease: ${prerelease}`);
                  shell.echo(error.message);
                  shell.exit(1);
                }
                else {
                  log.exit();
                  shell.exit(0);
                }
              });

            });

          });

        });

      });

    });

  });

});

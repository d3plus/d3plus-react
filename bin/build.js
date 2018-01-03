#! /usr/bin/env node

const log = require("../node_modules/d3plus-dev/bin/log")("creating distribution builds"),
      rollup = require("./rollup"),
      shell = require("shelljs"),
      {name} = JSON.parse(shell.cat("package.json"));

shell.config.silent = true;

/**
    @summary Handles the results of the shell.exec callback function.
    @private
*/
function kill(code, stdout) {
  log.fail();
  shell.echo(stdout);
  shell.exit(code);
}

log.timer("transpiling ES6 for modules");
shell.rm("-rf", "es");
shell.mkdir("-p", "es");
shell.exec("buble -i index.js --no modules -m -o es/index.js", (code, stdout) => {
  if (code) kill(code, stdout);

  shell.exec("buble -i src --no modules -m -o es/src", (code, stdout) => {
    if (code) kill(code, stdout);

    log.timer("compile builds");
    rollup().then(() => {

      log.timer("uglify builds");
      shell.exec(`uglifyjs build/${name}.js -m --comments -o build/${name}.min.js`, (code, stdout) => {
        if (code) kill(code, stdout);

        log.timer("create .zip distribution");
        const files = ["LICENSE", "README.md", `build/${name}.js`, `build/${name}.min.js`];
        shell.exec(`rm -f build/${name}.zip && zip -j -q build/${name}.zip -- ${files.join(" ")}`, (code, stdout) => {
          if (code) kill(code, stdout);

          log.exit();
          shell.exit(0);

        });

      });

    });

  });

});

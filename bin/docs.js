#! /usr/bin/env node

const log = require("../node_modules/d3plus-dev/bin/log")("documentation"),
      shell = require("shelljs");
const {description, name} = JSON.parse(shell.cat("package.json"));

log.timer("writing JSDOC comments to README.md");
const template = `${shell.tempdir()}/README.hbs`;
const contents = `# ${name}

[![NPM Release](http://img.shields.io/npm/v/${name}.svg?style=flat)](https://www.npmjs.org/package/${name})
[![Build Status](https://travis-ci.org/d3plus/${name}.svg?branch=master)](https://travis-ci.org/d3plus/${name})
[![Dependency Status](http://img.shields.io/david/d3plus/${name}.svg?style=flat)](https://david-dm.org/d3plus/${name})
[![Slack](https://img.shields.io/badge/Slack-Click%20to%20Join!-green.svg?style=social)](https://goo.gl/forms/ynrKdvusekAwRMPf2)

${description}

## Installing

Using NPM: \`npm install ${name}\`.

## API Reference
{{>main}}


###### <sub>Documentation generated on ${new Date().toUTCString()}</sub>
`;
new shell.ShellString(contents).to(template);

shell.exec(`jsdoc2md '+(bin|src)/**/*.+(js|jsx)' --heading-depth 3 -t ${template} > README.md`, (code, stdout) => {
  if (code) {
    log.fail();
    shell.echo(stdout);
    shell.exit(code);
  }
  else {
    log.exit();
    shell.exit(0);
  }
});

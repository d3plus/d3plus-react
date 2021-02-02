#! /usr/bin/env node

const log = require("../node_modules/d3plus-dev/bin/log")("documentation"),
      shell = require("shelljs");
const {description, name} = JSON.parse(shell.cat("package.json"));

log.timer("writing JSDOC comments to README.md");
const template = `${shell.tempdir()}/README.hbs`;
const docDir = `${shell.pwd()}/node_modules/d3plus-dev/bin/docs`;
const contents = `# ${name}

[![NPM Release](http://img.shields.io/npm/v/${name}.svg?style=flat)](https://www.npmjs.org/package/${name})
[![Build Status](https://travis-ci.org/d3plus/${name}.svg?branch=master)](https://travis-ci.org/d3plus/${name})
[![Dependency Status](http://img.shields.io/david/d3plus/${name}.svg?style=flat)](https://david-dm.org/d3plus/${name})
[![Gitter](https://img.shields.io/badge/-chat_on_gitter-brightgreen.svg?style=flat&logo=gitter-white)](https://gitter.im/d3plus/)

${description}

## Installing

Use \`npm install ${name} -S\` to install the package as a dependency.

## Configuration

A valid d3plus \`config\` _Object_ needs to be provided to the \`config\` prop of every visualization.

\`\`\`jsx
import {Treemap} from "d3plus-react";

const methods = {
  groupBy: "id",
  data: [
    {id: "alpha", value: 29},
    {id: "beta",  value: 10}
  ],
  size: d => d.value
};

<Treemap config={methods} />
\`\`\`

Additionally, a global set of styles can be provided using the "d3plus" React context key. This allows you to set base styles on all of your visualizations in one place, often in an external file. A component's \`config\` set by props will override global defaults key-by-key using a deep cloning function.
\`\`\`jsx
import React, {Component} from "react";

export default class MyApp extends Component {

  getChildContext() {

    return {
      d3plus: {
        shapeConfig: {
          fontFamily: "Comic Sans MS"
        }
      }
    };

  }

  render() {

    return (
      <main>
        {/* child components containing visualizations */}
      </main>
    );

  }

}

MyApp.childContextTypes = {
  d3plus: PropTypes.object
};
\`\`\`

## Update Cycle

In order to detect whether a component _should_ udpate in React, each component does a rudimentary check between the current \`config\` object and the incoming new \`config\` object. This is done via a simple equality check on the stringified versions of each object. This can also be overridded using the \`forceUpdate\` prop:

\`\`\`js
const shouldUpdate = this.props.forceUpdate ? false : JSON.stringify(oldConfig) === JSON.stringify(newConfig);
\`\`\`

This works in _most_ cases, but may not update your visualizations if using an accessor function that references an external variable. For example, if your \`x\` accessor is:

\`\`\`jsx
const config = {
  ...,
  x: d => d[xVar]
};
\`\`\`

...and \`xVar\` changes, the visualization will not update. The quick "hack" for this is add \`xVar\` to the config object so that it triggers the update via stringify:

\`\`\`jsx
const config = {
  ...,
  x: d => d[xVar],
  xVar
};
\`\`\`

## API Reference

{{#modules~}}
{{#if @first~}}##### Scripts
{{/if~}}
* [{{{name}}}](#{{{anchorName}}}){{#if summary}} - {{{summary}}}{{else if description}} - {{{description}}}{{/if}}
{{#if @last}}

{{/if~}}
{{/modules}}
{{>list kind="class" title="Classes" ~}}
{{>list kind="mixin" title="Mixins" ~}}
{{>list kind="member" title="Members" ~}}
{{>list kind="namespace" title="Objects" ~}}
{{>list kind="constant" title="Constants" ~}}
{{>list kind="function" title="Functions" ~}}
{{>list kind="event" title="Events" ~}}
{{>list kind="typedef" title="Typedefs" ~}}
{{>list kind="external" title="External" ~}}
{{>list kind="file" title="File" ~}}

---

{{#orphans ~}}
<a name="{{{anchorName}}}"></a>
#### {{>sig}}
{{>body~}}

---

{{/orphans~}}


###### <sub>Documentation generated on {{currentDate}}</sub>
`;
new shell.ShellString(contents).to(template);

shell.exec(`jsdoc2md '+(bin|src)/**/*.+(js|jsx)' --separators --helper ${ docDir }/helpers.js --partial '${ docDir }/partials/*.hbs' -t ${template} > README.md`, (code, stdout) => {
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

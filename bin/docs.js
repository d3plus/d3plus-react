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
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat)](https://gitter.im/d3plus/)

${description}

## Installing

Use \`npm install ${name} -S\` to install the package as a dependency. And then use the components in your React project like this:

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

Additionally, a file named \`.d3plus.js\` needs to exist in the root path of your project. This file should contain all global styles to be applied to the visualizations (passed to the .config( ) method). Here is an example that makes all of your visualizations use the best font ever created:
\`\`\`js
export default {
  shapeConfig: {
    fontFamily: "Comic Sans MS"
  }
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

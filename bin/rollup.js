const banner = require("../node_modules/d3plus-dev/bin/banner"),
      buble = require("rollup-plugin-buble"),
      deps = require("rollup-plugin-node-resolve"),
      json = require("rollup-plugin-json"),
      jsx = require("rollup-plugin-jsx"),
      log = require("../node_modules/d3plus-dev/bin/log")("rollup"),
      rollup = require("rollup"),
      shell = require("shelljs"),
      {name} = JSON.parse(shell.cat("package.json"));

shell.config.silent = true;
module.exports = function(opts = {}) {

  const plugins = [json(), jsx({factory: "React.createElement"})];
  if (opts.deps) plugins.push(deps({jsnext: true}));
  plugins.push(buble());

  const input = {
    input: "index.js",
    plugins,
    onwarn: () => {}
  };

  const output = {
    amd: {id: name},
    banner,
    file: `build/${name}${opts.deps ? ".full" : ""}.js`,
    format: "umd",
    name: "d3plus",
    sourcemap: true,
    sourcemapFile: `build/${name}${opts.deps ? ".full" : ""}.js`
  };

  /**
      @function output
      @desc Custom event handler for rollup watch bundle.
      @private
  */
  function onwarn(e) {
    switch (e.code) {
      case "BUNDLE_START":
        log.update(`bundling ${output.file}`);
        return undefined;
      case "BUNDLE_END":
        log.done(`bundled ${output.file} in ${e.duration}ms`);
        if (opts.watch) log.timer("watching for changes...");
        return undefined;
      case "ERROR":
      case "FATAL":
        log.fail();
        shell.echo(`bundle error in '${e.error.id}':`);
        return shell.echo(e.error);
      default:
        return undefined;
    }
  }

  log.timer(`bundling ${output.file}`);
  shell.mkdir("-p", "build");
  if (opts.watch) return rollup.watch(Object.assign(input, {output, watch: {chokidar: true}})).on("event", onwarn);
  else return rollup.rollup(input).then(bundle => bundle.write(output));

};

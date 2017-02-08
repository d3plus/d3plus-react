const banner = require("../node_modules/d3plus-dev/bin/banner"),
      buble = require("rollup-plugin-buble"),
      deps = require("rollup-plugin-node-resolve"),
      json = require("rollup-plugin-json"),
      jsx = require("rollup-plugin-jsx"),
      log = require("../node_modules/d3plus-dev/bin/log")("rollup"),
      rollup = require("rollup"),
      shell = require("shelljs"),
      watch = require("rollup-watch"),
      {name} = JSON.parse(shell.cat("package.json"));

shell.config.silent = true;
module.exports = function(opts = {}) {

  const plugins = [json(), jsx({factory: "React.createElement"})];
  if (opts.deps) plugins.push(deps({jsnext: true}));
  plugins.push(buble());

  const entry = {entry: "index.js", plugins, onwarn: () => {}};
  const config = {
    banner,
    dest: `build/${name}${opts.deps ? ".full" : ""}.js`,
    format: "umd",
    moduleId: name,
    moduleName: "d3plus",
    sourceMap: true,
    sourceMapFile: `build/${name}${opts.deps ? ".full" : ""}.js`
  };

  /**
      @function output
      @desc Custom event handler for rollup watch bundle.
      @private
  */
  function output(e) {
    switch (e.code) {
      case "BUILD_START":
        log.update(`bundling ${config.dest}`);
        return undefined;
      case "BUILD_END":
        log.done(`bundled ${config.dest} in ${e.duration}ms`);
        if (opts.watch) log.timer("watching for changes...");
        return undefined;
      case "ERROR":
        log.fail();
        shell.echo(`bundle error in '${e.error.id}':`);
        return shell.echo(e.error);
      default:
        return undefined;
    }
  }

  log.timer(`bundling ${config.dest}`);
  shell.mkdir("-p", "build");
  if (opts.watch) return watch(rollup, Object.assign(entry, config)).on("event", output);
  else return rollup.rollup(entry).then(bundle => bundle.write(config));

};

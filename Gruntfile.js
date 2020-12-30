fs = require("fs");
YAML = require("yaml");

function parseYaml(x) {
  return YAML.parse(fs.readFileSync(x, "utf8"));
}

function parseObjAttrs(x, cb) {
  return Object.fromEntries(Object.entries(x).map(cb));
}

function parseListToObj(x, cb) {
  return Object.fromEntries(x.map(i => [i, cb(i)]))
}

function joinListEntries(x) {
  return [x[0], x[1].join(" ")];
}

function watchConfig(x) {
  return {
    files: 'src/**/*',
    tasks: [x],
    options: {
      debounceDelay: 200,
    },
  }
}

module.exports = function (grunt) {
  const forceTasks = ["prettier"];
  const watchTasks = [
    "compile", "compileTests", "prebuild", "prepublish"
  ];
  const routines = parseObjAttrs(
    parseYaml("routines.yml"), joinListEntries
  );
  const watchConfigs = parseListToObj(watchTasks, watchConfig);

  grunt.initConfig({
    exec: routines,
    clean: { dist: ['dist']},
    watch: watchConfigs
  });

  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks("grunt-force-task");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Alias all routines as tasks
  for (let name of Object.keys(routines)) {
    forceTasks.includes(name)
      ? grunt.registerTask(name, "force:exec:" + name)
      : grunt.registerTask(name, "exec:" + name);
  }

  // Alias all watch tasks
  for (let name of watchTasks) {
      grunt.registerTask(name.concat("Watch"), "watch:" + name);
  }

  // Registers sequences
  grunt.registerTask("lint", ["cspell", "eslint"]);
  grunt.registerTask("format", ["prettier"]);
  grunt.registerTask("tests", ["jasmine"]);
  grunt.registerTask("prebuild", ["format", "lint"]);
  grunt.registerTask("build", ["clean:dist", "compile"]);
  grunt.registerTask("buildSpecs", ["clean:dist", "compileSpecs"]);
  grunt.registerTask(
    "prepublish", ["prebuild", "buildSpecs", "tests"]
  );
  grunt.registerTask("dev", ["prepublish", "build", "run"]);
  grunt.registerTask("devNew", ["prepublish", "build", "new"]);
}

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  , watch: { }
  , mochaTest: {
      options: {
        reporter: 'spec'
      }
    , src: ['test/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');

  //Default task(s).
  grunt.registerTask('default', []);

  //Test task.
  grunt.registerTask('test', ['mochaTest']);
};

/*
 * grunt-epub
 * https://github.com/Melindrea/grunt-epub
 *
 * Copyright (c) 2014 Marie Hogebrandt
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        // 'test/**.js',
        'app/**.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }

  });

  // These plugins provide necessary tasks.
  require('jit-grunt')(grunt);

  grunt.registerTask('test', ['mocha']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'verb']);

};

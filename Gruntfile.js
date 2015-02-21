/*
 * grunt-doxy
 * https://github.com/Raynes/grunt-doxy
 *
 * Copyright (c) 2015 Anthony Grimes
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true,
        playground: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'tasks-es6/',
            src: ['**/*.js'],
            dest: 'tasks'
          }
        ]
      }
    },

    doxy: {
      default_options: {
        options: {
          doxme: {
            readme: true
          }
        },
        files: [
          {
            expand: true,
            cwd: 'tasks-es6',
            src: ['**/*'],
            dest: 'docs/'
          }
        ]
      },
    },

    release: {
      options: {
        beforeReleaseTasks: ['babel']
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('default', ['babel']);
};

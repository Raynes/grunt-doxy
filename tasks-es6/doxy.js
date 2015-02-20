/*
 * grunt-doxy
 * https://github.com/Raynes/grunt-doxy
 *
 * Copyright (c) 2015 Anthony Grimes
 * Licensed under the MIT license.
 */
"use babel";
'use strict';

import doxme from "doxme";
import dox from "dox";
import _ from "lodash";

export default function(grunt) {

  /**
   * Check if a file exists and warn if not.
   * @param {String} file
   * @return {Boolean}
   */
  function checkExists(file) {
    let exists = grunt.file.exists(file);
    if (!exists) grunt.log.warn("Source file ${file} does not exist!");
    return exists;
  }

  grunt.registerMultiTask('doxy',
    "It'll generate dox for your project and wash yer dishes too!",

    function() {
      let defaults = {
        readme: false,
        travis: grunt.file.exists('.travis.yml'),
        pkg: grunt.file.exists('package.json') &&
             JSON.parse(grunt.file.read('package.json'))
      }
      let options = _.defaults(this.options().doxme || {}, defaults);

      /**
       * Process a file with dox and doxme.
       * @param  {Object} file File object from grunt.
       * @param  {String} path File's path.
       */
      function doxmeify(file, path) {
        if (!options.readme) doxme = _.ary(doxme, 1);
        let doxed = dox.parseComments(grunt.file.read(path));
        let doxmed = doxme(doxed,
          options.readme , options.pkg, options.travis);
        grunt.file.write(file.dest, doxmed);
      }

      this.files.forEach(function (file) {
        file.src.filter(checkExists).forEach(_.partial(doxmeify, file));
      });
    }
  )
}

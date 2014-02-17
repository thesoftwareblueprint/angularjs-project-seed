'use strict';

module.exports = function (grunt) {
    var os = require("os");
    var globalConfig = require('./grunt/globalConfig');

    // load time grunt - helps with optimizing build times
    require('time-grunt')(grunt);

    // load grunt task configurations
    require('load-grunt-config')(grunt);

    //default task
    grunt.registerTask('default', ['build','build-shared-libs']);

    // build tasks
    grunt.registerTask('build-production', ['build-css','build-js', 'uglify']);
    grunt.registerTask('build-dev', ['build-css','build-js']);
    grunt.registerTask('build-css', ['compass:dev']);
    grunt.registerTask('build-css', ['compass:dev']);
    grunt.registerTask('build-js', ['html2js','browserify2:app-dev']);
    grunt.registerTask('build-shared-libs', ['browserify2:shared-libs']);

    // server task
    grunt.registerTask('server', ['clean','copy','build-dev', 'build-shared-libs', 'express:dev', 'watch']);

};
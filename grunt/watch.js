/**
 * Created by walter on 2/17/14.
 */
module.exports = {
    options: {
        livereload: true
    },
    js: {
        files: ['<%= globalConfig.srcdir %>/**/*.js'],
        tasks: [ 'build-dev']
    },
    jsTest: {
        files: ['test/spec/**/*.js'],
        tasks: ['newer:jshint:test', 'karma']
    },
    compass: {
        files: ['<%= globalConfig.srcdir %>/**/*.{scss,sass}'],
        tasks: ['compass:dev']
    },
    html: {
        files: ['app/**/*.tpl.html', 'app/**/index.html'],
        tasks: ['copy:dist', 'build-dev']
    }
};
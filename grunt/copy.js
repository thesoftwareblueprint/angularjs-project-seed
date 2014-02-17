/**
 * Created by walter on 2/17/14.
 */
module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: '<%= globalConfig.srcdir %>',
                dest: '<%= globalConfig.distdir %>',
                src: [
                    '*.html',
                    'assets/images/**/*',
                    'assets/fonts/**/*'
                ]
            }, {
                expand: true,
                cwd: '.tmp/images',
                dest: '<%= globalConfig.dist %>/images',
                src: ['generated/*']
            }]
    },
    styles: {
        expand: true,
        cwd: '<%= globalConfig.srcdir %>/assets/css',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
    }
};
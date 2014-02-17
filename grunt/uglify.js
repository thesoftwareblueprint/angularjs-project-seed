/**
 * Created by walter on 2/17/14.
 */
module.exports = {
    dist: {
        files: {
            '<%= globalConfig.distdir %>/assets/js/app.js': [
                '<%= globalConfig.tmpdir %>/app.js'
            ]
        }
    }
};
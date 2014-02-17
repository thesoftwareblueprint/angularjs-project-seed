/**
 * Created by walter on 2/17/14.
 */
module.exports = {
    'dist': {
        src: ['<%= globalConfig.srcfiles.tpl %>'],
        dest: '<%= globalConfig.tmpdir %>/ats-templates.js',
        module: 'ats.templates'
    }
};
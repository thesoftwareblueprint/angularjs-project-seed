/**
 * Created by walter on 2/17/14.
 */
module.exports = function() {
    var globalConfig = {
        app: 'app',
        distdir: 'app/dist',
        srcdir: 'app/src',
        tmpdir: '.tmp',
        srcfiles: {
            js: ['./app/src/**/*.js'],
            tpl: ['./app/src/**/*.tpl.html']
        }

    };

    return globalConfig;

}

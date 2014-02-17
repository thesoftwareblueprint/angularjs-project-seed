/**
 * Created by walter on 2/17/14.
 */
module.exports = {
    'shared-libs': {
        entry: './<%= globalConfig.srcdir %>/scripts/shared-libs.js',
        compile: './<%= globalConfig.distdir %>/assets/js/shared-libs.js',
        options: {
            expose: {
                files: [
                    { cwd: '<%= globalConfig.app %>/bower_components/', src: ['jquery/jquery.js',
                        'es5-shim/es5-shim.js',
                        'angular/angular.js',
                        'json3/lib/json3.min.js',
                        'angular-resource/angular-resource.js',
                        'angular-cookies/angular-cookies.js',
                        'angular-sanitize/angular-sanitize.js',
                        'angular-route/angular-route.js',
                        'bootstrap-sass/vendor/assets/javascripts/bootstrap.js',
                        'angular-ui-router/release/angular-ui-router.js',
                        'angular-bootstrap/ui-bootstrap.js',
                        'angular-bootstrap/ui-bootstrap-tpls.js']
                    }
                ]
            }
        }
    },
    'app-prod': {
        entry: './<%= globalConfig.srcdir %>/app.js',
        compile: './<%= globalConfig.tmpdir %>/app.js',
        debug: true,
        options: {
            expose: {'ats-templates':'./<%= globalConfig.tmpdir %>/ats-templates.js'}
        }
    },
    'app-dev': {
        entry: './<%= globalConfig.srcdir %>/app.js',
        compile: './<%= globalConfig.distdir %>/assets/js/app.js',
        debug: true,
        options: {
            expose: {'ats-templates':'./<%= globalConfig.tmpdir %>/ats-templates.js'}
        }

    }
};
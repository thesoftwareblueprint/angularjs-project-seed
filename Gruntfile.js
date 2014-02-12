// Generated on 2014-01-24 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },

        // Project settings
        angular_project_seed: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            src: 'app/src',
            dist: 'app/dist'
        },


        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= angular_project_seed.src %>/**/*.js'],
                tasks: [ 'browserify2'],
                //'newer:jshint:all',
                options: {
                    livereload: true
                }
            },
            jsTest: {
                files: ['test/spec/**/*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            compass: {
                files: ['<%= angular_project_seed.src %>/**/*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= angular_project_seed.src %>/**/*.html',
                    '.tmp/styles/**/*.css',
                    '<%= angular_project_seed.src %>/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= angular_project_seed.app %>',
                        '<%= angular_project_seed.src %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= angular_project_seed.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= angular_project_seed.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= angular_project_seed.src %>/**/*.js'
            ],
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/**/*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= angular_project_seed.dist %>/*',
                        '!<%= angular_project_seed.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '**/*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        'bower-install': {
            app: {
                html: '<%= angular_project_seed.src %>/index.html',
                ignorePath: '<%= angular_project_seed.app %>/'
            }
        },

        browserify2: {
            dev: {
                entry: './<%= angular_project_seed.src %>/app.js',
                compile: '.tmp/scripts/app.js'
//                options: {
//                    expose: {
//                        files: [
//                            {
//                                cwd: './<%= angular_project_seed.app %>/bower_components/',
//                                src: ['**/*.js']
//                            }
//                        ]
//                    }
//                }
            }
//            ,
//            compile: {
//                entry: './<%= angular_project_seed.src %>/app.js',
//                compile: '.tmp/scripts/app.js'
//            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= angular_project_seed.src %>',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= angular_project_seed.src %>/assets/images',
                javascriptsDir: '<%= angular_project_seed.src %>',
                fontsDir: '<%= angular_project_seed.src %>/assets/fonts',
                importPath: '<%= angular_project_seed.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= angular_project_seed.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= angular_project_seed.dist %>/scripts/{,*/}*.js',
                        '<%= angular_project_seed.dist %>/styles/{,*/}*.css',
                        '<%= angular_project_seed.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= angular_project_seed.dist %>/styles/fonts/*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= angular_project_seed.src %>/index.html',
            options: {
                dest: '<%= angular_project_seed.dist %>'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= angular_project_seed.dist %>/{,*/}*.html'],
            css: ['<%= angular_project_seed.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= angular_project_seed.dist %>']
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= angular_project_seed.src %>/assets/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= angular_project_seed.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= angular_project_seed.src %>/assets/images',
                    src: '{,*/}*.svg',
                    dest: '<%= angular_project_seed.dist %>/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= angular_project_seed.dist %>',
                    src: ['*.html', 'app/{,*/}*.html'],
                    dest: '<%= angular_project_seed.dist %>'
                }]
            }
        },

        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= angular_project_seed.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= angular_project_seed.app %>',
                    dest: '<%= angular_project_seed.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'bower_components/**/*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= angular_project_seed.src %>',
                    dest: '<%= angular_project_seed.dist %>',
                    src: [
                        '*.html',
                        '**/*.html',
                        'assets/images/{,*/}*.{webp}',
                        'assets/fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= angular_project_seed.src %>/assets/css',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server',
                'browserify2'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist',
                'imagemin',
                'svgmin',
                'browserify2'
            ]
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css',
        //         '<%= yeoman.app %>/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/scripts/scripts.js': [
        //         '<%= yeoman.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'bower-install',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'browserify2',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'bower-install',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngmin',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};

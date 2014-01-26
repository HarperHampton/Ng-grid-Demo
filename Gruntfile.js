module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            all: ['build']
        },
        concat: {
            dev: {
                files: {
                    'build/libs/all.js': ['src/js/CGrid.js', 'src/js/*.js']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/libs/all.min.js': ['src/js/CGrid.js', 'src/js/*.js']
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'build/css/CGrid.min.css': ['src/**/*.css']
                }
            }
        },
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['underscore/underscore.js', 'jquery/jquery.js', 'jquery.event.drag-drop/event.{drag,drop}/jquery.event.{drag,drop}.js', 'slickgrid/slick.core.js', 'slickgrid/slick.grid.js', 'angular/angular.js', 'angular-route/angular-route.js'],
                    dest: 'build/libs/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['slickgrid/slick.grid.css', 'slickgrid/css/smoothness/jquery-ui-1.8.16.custom.css'],
                    dest: 'build/css/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['slickgrid/css/smoothness/images/*'],
                    dest: 'build/css/images/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'src/',
                    src: ['css/*'],
                    dest: 'build/css/',
                    flatten: true
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['underscore/underscore-min.js', 'underscore/underscore-min.map', 'jquery/jquery.min.js', 'jquery/jquery.min.map', 'jquery.event.drag-drop/event.{drag,drop}/jquery.event.{drag,drop}.js', 'slickgrid/slick.core.js', 'slickgrid/slick.grid.js', 'angular/angular.min.js', 'angular/angular.min.js.map', 'angular-route/angular-route.min.js', 'angular-route/angular-route.min.js.map'],
                    dest: 'build/libs/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['slickgrid/slick.grid.css', 'slickgrid/css/smoothness/jquery-ui-1.8.16.custom.css'],
                    dest: 'build/css/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['slickgrid/css/smoothness/images/*'],
                    dest: 'build/css/images/',
                    flatten: true
                }]
            }
        },
        template: {
            dev: {
                options: {
                    data: {
                        scripts: ['libs/underscore.js', 'libs/jquery.js', 'libs/jquery.event.drag.js', 'libs/jquery.event.drop.js', 'libs/slick.core.js', 'libs/slick.grid.js', 'libs/angular.js', 'libs/angular-route.js', 'libs/all.js'],
                        csss: ['css/slick.grid.css', 'css/jquery-ui-1.8.16.custom.css', 'css/CGrid.css']
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.tpl'],
                    dest: 'build/',
                    ext: '.html'
                }]
            },
            dist: {
                options: {
                    data: {
                        scripts: ['libs/underscore-min.js', 'libs/jquery.min.js', 'libs/jquery.event.drag.js', 'libs/jquery.event.drop.js', 'libs/slick.core.js', 'libs/slick.grid.js', 'libs/angular.min.js', 'libs/angular-route.min.js', 'libs/all.min.js'],
                        csss: ['css/slick.grid.css', 'css/jquery-ui-1.8.16.custom.css', 'css/CGrid.min.css']
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.tpl'],
                    dest: 'build/',
                    ext: '.html'
                }]
            }
        },
        watch: {
            dev: {
                files: ['src/**/*'],
                tasks: ['clean:all', 'concat:dev', 'copy:dev', 'template:dev'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            dev: {
                options: {
                    port: 9898,
                    base: 'build/',
                    open: 'http://localhost:9898'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean:all', 'concat:dev', 'copy:dev', 'template:dev', 'connect:dev', 'watch:dev']);

    grunt.registerTask('dist', ['clean:all', 'uglify:dist', 'cssmin:dist', 'copy:dist', 'template:dist']);
};
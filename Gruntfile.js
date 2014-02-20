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
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['underscore/underscore.js', 'jquery/jquery.js', 'angular/angular.js', 'angular-route/angular-route.js', 'ng-grid/ng-grid-2.0.7.debug.js'],
                    dest: 'build/libs/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['ng-grid/ng-grid.css', 'jquery.ui/themes/base/jquery.ui.theme.css'],
                    dest: 'build/css/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'bower_components/jquery.ui/themes/base/',
                    src: ['images/*'],
                    dest: 'build/css/'
                }, {
                    expand: true,
                    cwd: 'bower_components/',
                    src: ['bootstrap/dist/js/bootstrap.js'],
                    dest: 'build/libs/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist/css/',
                    src: ['bootstrap.css', 'bootstrap-theme.css'],
                    dest: 'build/css/',
                    flatten: true
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist/',
                    src: ['fonts/*'],
                    dest: 'build/'
                }, {
                    expand: true,
                    cwd: 'src/',
                    src: ['css/*', 'data/*'],
                    dest: 'build/'
                }]
            }
        },
        template: {
            dev: {
                options: {
                    data: {
                        scripts: ['libs/underscore.js', 'libs/jquery.js', 'libs/bootstrap.js', 'libs/angular.js', 'libs/angular-route.js', 'libs/ng-grid-2.0.7.debug.js', 'libs/all.js'],
                        csss: ['css/bootstrap.css', 'css/bootstrap-theme.css', 'css/ng-grid.css', 'css/jquery.ui.theme.css', 'css/CGrid.css', ]
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

    grunt.registerTask('default', ['clean:all', 'concat:dev', 'copy:dev', 'template:dev', 'connect:dev', 'watch:dev']);

};
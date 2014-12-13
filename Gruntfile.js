module.exports = function(grunt) {

    // config
    grunt.initConfig({

        less: {
            build: {
                expand: true,
                cwd: 'src/less/',
                src: ['**/*.less'],
                dest: 'build/css/',
                ext: '.css'
            }
        },

        csslint: {
            check: {
                src: '<%= less.build.dest %>**/*.css'
            }
        },

        watch: {
            less: {
                files: 'src/less/**/*.less',
                tasks: ['less', 'csslint']
            }
        },

        typescript: {
            build: {
                expand: true,
                cwd: 'src/ts/',
                src: ['**/*.ts', '!node_modules/**/*.ts'],
                dest: 'build/js/',
                ext: '.js',
                options: {
                    noImplicitAny: true
                }
            }
        }

    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typescript');

    // tasks
    grunt.registerTask('less2css', ['less', 'csslint']);
    grunt.registerTask('default', ['less2css', 'typescript']);

};

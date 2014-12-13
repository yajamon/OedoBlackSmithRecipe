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
                tasks: ['less2css']
            }
        },

        typescript: {
            build: {
                src: ['src/ts/**/*.ts'],
                options: {
                    noImplicitAny: true,
                }
            }
        },

        copy: {
            ts2js: {
                expand: true,
                cwd: 'src/ts/',
                src: ['**/*.js'],
                dest: 'build/js/',
            }
        },

        clean: {
            js_in_ts: {
                src: 'src/ts/**/*.js'
            }
        }

    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // tasks
    grunt.registerTask('less2css', ['less', 'csslint']);
    grunt.registerTask('ts2js', ['typescript', 'copy:ts2js', 'clean:js_in_ts']);
    grunt.registerTask('default', ['less2css', 'ts2js']);

};

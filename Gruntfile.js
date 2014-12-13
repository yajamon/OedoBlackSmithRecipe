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
            less2css: {
                files: 'src/css/*.less',
                tasks: ['less', 'csslint']
            }
        }

    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('default', ['less', 'csslint']);

};

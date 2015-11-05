var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({

        browserify: {
            dist: {
                options:{
                    debug: true,
                    transform: ['babelify']
                },
                files:{ 'app/dist/pettycash.js' : [
                        'app/components/**/*.js',
                    ]
                }
            },
        },

        watch:{
            options: {livereload: true},
            browserify: {
                files: ['app/components/**/*.js'],
                tasks: ['browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('default', ['watch']);
};
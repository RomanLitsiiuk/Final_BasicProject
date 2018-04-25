'use strict'
module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });

  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Less to css
        less: {
            development: {
                options: {
                    paths: ['src/styles'],
                    compress: false,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'dist/css/styles.css': 'src/styles/styles.less'
                }
            }
        },

        //watch
        watch: {
            css: {
                files: ['src/**/*.less'],
                tasks: ['less', 'autoprefixer']
            }
        },

        //autoprefixer
        autoprefixer: {
            options: {
                browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
            },
            dist: {
                files: {
                    'dist/css/styles.css':'dist/css/styles.css'
                }
            }
        }
    });

    //Load Tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    //Register Tasks
    grunt.registerTask('default', ['less', 'watch', 'autoprefixer']);
};
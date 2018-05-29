module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js'],
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    browserSync: {
      bsFiles: {
           src : [
              'src/css/*.css',
              'src/*.html'
          ]
      },
      options: {
          server: {
              baseDir: "./src"
          },
          https: true,
      }
    },

   sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'src/assets/stylesheets/base.css': 'src/assets/sass/base.scss'
            }
        }
    }
  });

  grunt.registerTask('default', ['jshint','sass:dist','browserSync']);

};
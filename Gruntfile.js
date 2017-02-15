module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    browserSync: {
      bsFiles: {
          src : 'src/css/*.css'
      },
      options: {
        server: {
            baseDir: "src"
        }
      }
    },
    compass: {                  
      dist: {                  
        options: {              
          environment: 'production',
          outputStyle: 'compressed'
        }
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('ngrok');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['jshint','compass:dev']);

};
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/assets/js/*.js'],
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    browserSync: {
      bsFiles: {
          src : ['src/css/*.css', 'src/index.html']
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
    },
    ngrok: {
      options: {
        authToken: '6rK5A3uncenJaaxEKLbXk_4rHWPm7HyuryDsxaMtgaj'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-ngrok');
  grunt.registerTask('default', ['jshint','compass:dev','browserSync','ngrok']);

};
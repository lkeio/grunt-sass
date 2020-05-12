module.exports = function(grunt) {
    
    // Config
    grunt.initConfig({
      // SASS 
        sass: {
              dev: {
                options: {
                  sourcemap: 'none',
                  style: 'expanded'
                },
                files: {
                  'dist/css/app.css': 'src/scss/app.scss'
                }
            },
            dist: {
                options: {
                  sourcemap: 'none',
                  style: 'compressed'
                },
                files: {
                  'dist/css/app.min.css': 'src/scss/app.scss'
                }
            }
        },
        // Cross Browser Compatibilty with autoprefixer
        autoprefixer:{
            dist:{
              files:{
                'dist/css/app.css':'dist/css/app.css',
                'dist/css/app.min.css':'dist/css/app.min.css'
              }
            }
          },
          // Create a host in port 8000 accessable with localhost:8000 Or http://127.0.0.1:8000
          connect: {
            server: {
              options: {
                port: 8000
              }
            }
          },
          // Adding Watcher 
          watch: {
            options: {
              livereload: true,
            },
            css: {
              files: ['src/scss/*.scss'],
              files: ['src/scss/**/*.scss'],
              tasks: ['sass', 'autoprefixer'],
              options: {
                spawn: false,
              }
            }
          }
    });

  // Loading NPM dependencies
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register default task
  grunt.registerTask('default', ['connect', 'watch']);
};

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    haml: {                           
      dist: {                            
        files: {                         
          '../public/game.html': 'src/index.haml'
        }
      }
    },

    clean: {
      js: ["src/javascripts/**/*", "!src/javascripts/bower_lib/**", "!src/javascripts/lib/**"]
    },

    coffee: {
      options: {
        bare: true
      },
      compile: {
        expand: true,
        //flatten: true,
        cwd: 'src/coffeescripts/',
        src: ['**/*.coffee'],
        dest: 'src/javascripts/',
        ext: '.js'
      }
    },

    sass: {
      compile: {
        files: {
          '../public/stylesheets/style.css' : 'src/sass/style.sass'
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          name: 'main',
          baseUrl: 'src/javascripts',
          mainConfigFile: 'src/javascripts/config.js',
          out: '../public/javascripts/main-built.js',
          optimize: "none"
        }
      }
    },

    copy: {
      assets: {
        files: [
          // includes files within path
          //{expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

          // includes files within path and its sub-directories
          //{expand: false, src: ['src/images/**/*'], dest: 'dist/images/'},

          // makes all src relative to cwd
          {expand: true, cwd: 'src/images/', src: ['**'], dest: '../public/images/'},
          {expand: true, cwd: 'src/lib/', src: ['**'], dest: '../public/javascripts/lib'},

          // flattens results to a single level
          //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-haml2html');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('dist', ['haml', 'sass', 'clean', 'coffee', 'requirejs', 'copy']);
  grunt.registerTask('default', 'dist');
};

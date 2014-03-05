module.exports = function(grunt) {
    
    // config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {                          
                    style: 'expanded',
                    trace: true,
                    precision: 3,
                    noCache: true,
                    unixNewlines: true
                    //banner: '/* <%= pkg.name %> <%= pkg.version %> (c)<%= pkg.author %> */'
                },
                files: {
                    'css/<%= pkg.name %>.css': ['src/sass/main.scss']
                }
            }
        },

        concat: {
        //     // options: {
        //     //       separator: '\n',
        //     // },
             dist: {
                 src: ['src/js/main.js'],
                 dest: 'js/<%= pkg.name %>.js'
             }
        }

    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // define task(s)
    grunt.registerTask('default', ['sass', 'concat']);

};
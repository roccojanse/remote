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
                    banner: '/* <%= pkg.name %> <%= pkg.version %> (c)<%= pkg.author %> */'
                },
                files: {
                    'css/<%= pkg.name %>.css': ['src/sass/main.scss']
                }
            }
        }

    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');

    // define task(s)
    grunt.registerTask('default', ['sass']);

};
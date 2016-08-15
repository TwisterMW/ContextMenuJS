module.exports = function(grunt){

	grunt.initConfig({
        // Automatically includes bower dependencies on index.html
        wiredep: {
            task: {
                src: 'index.html'
            },
        },

        // Automatically detects bower_component updates and executes wiredep task
        watch: {
            js: {
                files: ['js/*', 'src/*.js'],
                tasks: ['jshint']
            }
        },

        // Automatically detects JS errors
        jshint: {
            all: ['Gruntfile.js', 'js/*.js', 'src/*.js']
        },

        // Mocks a server on custom port
        connect: {
            dev: {
                options: {
                    port: 3000,
                    base: '.',
                    open: true
                }
            }
        },

    });

    // Tasks loading
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Task for watching JS errors during development (Errors detected will be outputed on console)
    grunt.registerTask('jslinter', ['watch:js']);

    // Developer related tasks
    // ===============================================================================================

    // $ grunt server (Launches development server)
    grunt.registerTask('server', [
        'wiredep', 'connect:dev', 'jslinter'
    ]);
};
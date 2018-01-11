module.exports = function (wallaby) {
    return {
        files: [
            './src/scripts/**/*.js'
        ],

        tests: [
            './tests/**/*.js'
        ],

        setup: function () {
            global.expect = require('chai').expect;
        },

        env: {
            type: 'node',
            runner: 'node'
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel()
        }
    };
};
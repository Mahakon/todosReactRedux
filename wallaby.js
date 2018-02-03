module.exports = function (wallaby) {
    return {
        files: [
            './src/scripts/**/*.js?(x)'
        ],

        tests: [
            './tests/**/*.js?(x)'
        ],

        setup: function () {
            global.expect = require('mocha').expect;
        },

        env: {
            type: 'node',
            runner: 'node'
        },

        compilers: {
            '**/*.js?(x)': wallaby.compilers.babel()
        }
    };
};
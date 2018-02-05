module.exports = function (wallaby) {
    return {
        files: [
            './src/scripts/**/*.js?(x)'
        ],
        tests: [
            './tests/**/*.test.js'
        ],

        env: {
            type: 'node',
            runner: 'node'
        },

        compilers: {
            '**/*.js?(x)': wallaby.compilers.babel()
        },

        testFramework: 'jest',

        debug: true
    };
};
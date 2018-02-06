module.exports = function (wallaby) {
    return {
        files: [
            './src/scripts/**/*.js?(x)',
            '!src/scripts/__test__/**/*.test.js'
        ],
        tests: [
            './src/scripts/__tests__/**/*.test.js'
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
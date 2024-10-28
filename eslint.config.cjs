const clearConfig = require("@clear/style/eslint/js");

module.exports = [
    // Test support and config (adds global var definitions and test-specific rules)
    mochaPlugin.configs.flat.recommended,
    {
        rules: {
            "mocha/prefer-arrow-callback": "off",
            "mocha/no-mocha-arrows": "off",
        },
    },

    // Add additional globals for mocha and node support
    {
        languageOptions: {
            globals: {
                ...globals.node,

                should: false,
            },
        },
    },

    // Base config
    ...clearConfig,
];

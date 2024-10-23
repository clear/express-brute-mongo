const clearConfig = require("@clear/eslint-config/js");
const mochaPlugin = require("eslint-plugin-mocha");
const globals = require("globals");

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

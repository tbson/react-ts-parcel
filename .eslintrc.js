module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/eslint-recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', '@typescript-eslint/eslint-plugin', 'react-hooks', 'import'],
    rules: {
        indent: ['error', 4],
        'comma-dangle': 0,
        'react/jsx-filename-extension': 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': [2, 'first'],
        'react/no-danger': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-one-expression-per-line': 0,
        'react/destructuring-assignment': 0,
        'import/no-unresolved': 'error',
        'object-curly-spacing': 0,
        'object-curly-newline': 0,
        'import/no-named-as-default': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false
            }
        ]
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    }
};

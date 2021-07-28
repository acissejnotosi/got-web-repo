module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            'jsx': true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
            'error'
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'ts': 'never',
                'tsx': 'never',
                'js': 'never',
                'jsx': 'never'
            }
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error'
        ],
        'react/jsx-filename-extension': [
            'warn',
            {
                'extensions': [
                    '.tsx'
                ]
            }
        ],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    ignorePatterns: [
        ".eslintrc.js",
        "/*.*"
    ],
}
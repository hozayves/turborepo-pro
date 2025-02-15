
module.exports = {
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier'
    ],
    plugins: ['import', '@typescript-eslint'],

    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts']
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
                moduleDirectory: ['node_modules', 'src/']
            },
            typescript: {
                alwaysTryTypes: true,
                project: '.'
            }
        }
    },
    overrides: [
        {
            env: {
                jest: true
            },
            files: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
            extends: ["plugin:jest/recommended"]
        }
    ],
    ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist']
}
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        'plugin:jsdoc/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
    ],
	root: true,
	parser: '@typescript-eslint/parser',
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "files": ["*.ts", "*.tsx"],
            "extends": [
              "plugin:@typescript-eslint/eslint-recommended",
              "plugin:@typescript-eslint/recommended"
            ],
            "parser": "@typescript-eslint/parser",
            "plugins": ["@typescript-eslint"]
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsdoc",
		'@typescript-eslint'
    ],
    "rules": {
    }
}

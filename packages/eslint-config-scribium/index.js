module.exports = {
	extends: [
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'no-var': 'error',
		'prefer-const': 'error',
	},
	env: {
		node: true,
		es6: true,
	},
};

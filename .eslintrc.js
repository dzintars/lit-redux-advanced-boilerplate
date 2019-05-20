module.exports = {
	extends: ['@open-wc/eslint-config', 'eslint-config-prettier'].map(require.resolve),
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true, optionalDependencies: false, peerDependencies: false },
		],
	},
};

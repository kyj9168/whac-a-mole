module.exports = {
	apps: [
		{
			name: 'whac_a_mole',
			script: './dist/app.js',
			instances: 1,
			exec_mode: 'cluster',
		},
	],
};

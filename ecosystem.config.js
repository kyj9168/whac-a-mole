module.exports = {
	apps: [
		{
			name: 'kakao',
			script: './dist/app.js',
			instances: 1,
			exec_mode: 'cluster',
		},
	],
};

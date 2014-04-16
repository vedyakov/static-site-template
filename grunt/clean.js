module.exports = {
	options: {
		force: true
	},
	dev: '.tmp',
		dist: {
		files: [
			{
				dot: true,
				src: [
					'.tmp',
					'<%= path.production %>/*',
					'!<%= path.production %>/.git*'
				]
			}
		]
	}
};
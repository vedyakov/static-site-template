module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= path.temp %>/<%= folder.scripts %>',
				src: ['*.js', '!*.min.js'],
				dest: '<%= path.production %>/<%= folder.scripts %>'
			}
		]
	}
};
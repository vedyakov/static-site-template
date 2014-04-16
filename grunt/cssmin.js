module.exports = {
	options: {
		report: true
	},
	dist: {
		expand: true,
		cwd: '<%= path.temp %>/<%= folder.styles %>',
		src: ['*.css', '!*.min.css'],
		dest: '<%= path.production %>/<%= folder.styles %>',
		ext: '.css'
	}
};
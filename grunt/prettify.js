module.exports = {
	options: {
		prettifyrc: '.prettifyrc'
	},
	all: {
		expand: true,
		cwd: '<%= path.temp %>/ugly/',
		ext: '.html',
		src: ['*.html'],
		dest: '<%= path.production %>'
	}
};
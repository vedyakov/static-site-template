module.exports = {
	options: {
		banner: '<%= meta.header %>',
		footer: '<%= meta.footer %>'
	},
	dev: {
		files: [
			{
				expand: true,
				cwd: '<%= path.development %>/<%= folder.scripts %>',
				src: '*.js',
				dest: '<%= path.temp %>/<%= folder.scripts %>'
			}
		]
	},
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= path.development %>/<%= folder.scripts %>',
				src: '*.js',
				dest: '<%= path.temp %>/<%= folder.scripts %>'
			}
		]
	},
	compile: {
		files: [
			{
				expand: true,
				cwd: '<%= path.development %>/<%= folder.scripts %>',
				src: '*.js',
				dest: '<%= path.production %>/<%= folder.scripts %>'
			}
		]
	}
};
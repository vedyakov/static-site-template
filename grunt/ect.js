module.exports = {
	dev: {
		options: {
			ext: '.ect',
			root: '<%= path.development %>/<%= folder.templates %>'
		},
		cwd: '<%= path.development %>/<%= folder.templates %>',
		patterns:  [ '*.ect' ],
		dest: '<%= path.temp %>/'
	},
	dist: {
		options: {
			ext: '.ect',
			root: '<%= path.development %>/<%= folder.templates %>'
		},
		cwd: '<%= path.development %>/<%= folder.templates %>',
		patterns:  [ '*.ect' ],
		dest: '<%= path.production %>/'
	},
	compile: {
		options: {
			ext: '.ect',
			root: '<%= path.development %>/<%= folder.templates %>'
		},
		cwd: '<%= path.development %>/<%= folder.templates %>',
		patterns:  [ '*.ect' ],
		dest: '<%= path.temp %>/ugly/'
	}
};
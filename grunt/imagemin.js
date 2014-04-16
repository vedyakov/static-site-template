module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= path.development %>/<%= folder.images %>',
				src: '{,**/}*.{png,jpg,jpeg}',
				dest: '<%= path.production %>/<%= folder.images %>'
			}, {
				expand: true,
				cwd: '<%= path.development %>/<%= folder.pictures %>',
				src: '{,**/}*.{png,jpg,jpeg}',
				dest: '<%= path.production %>/<%= folder.pictures %>'
			}

		]
	}
};
module.exports = {
	dist: {
		files: [{
				expand: true,
				dot: true,
				cwd: '<%= path.development %>',
				dest: '<%= path.production %>',
				src: [
					'*.{ico,txt}',
					'.htaccess',
					'<%= folder.video %>/*',
					'<%= folder.swf %>/*',
					'<%= folder.fonts %>/*',
					'<%= folder.scripts %>/vendor/{,**/}*.js',
					'<%= folder.images %>/{,**/}*.{gif,webp,svg,svgz}',
					'<%= folder.pictures %>/{,**/}*.{gif,webp,svg,svgz}',
					'<%= folder.components %>/jquery-modern/dist/jquery.min.js',
					'<%= folder.components %>/jquery-legacy/dist/jquery.min.js'
				]
			}
		]
	}
};
module.exports = {
	ect: {
		files: ['<%= path.development %>/<%= folder.templates %>/{,**/}*.ect'],
		tasks: ['ect:dev']
	},
	less: {
		files: ['<%= path.development %>/<%= folder.less %>/{,**/}*.less'],
		tasks: ['less:dev']
	},
	compass: {
		files: ['<%= path.development %>/<%= folder.sass %>/{,**/}*.less'],
		tasks: ['sass:dev']
	},
	rig: {
		files: [ '<%= path.development %>/<%= folder.scripts %>/{,**/}*.js' ],
		tasks: [ 'rig:dev' ]
	},
	livereload: {
		options: {
			interrupt: true,
				livereload: true,
				spawn: true
		},
		files: [ '<%= path.temp %>/**/*' ]
	}
};

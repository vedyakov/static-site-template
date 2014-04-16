module.exports = {
	ect: {
		files: ['<%= path.development %>/<%= folder.templates %>/{,**/}*.ect'],
		tasks: ['ect:dev']
	},
	compass: {
		files: ['<%= path.development %>/<%= folder.styles %>/{,**/}*.{scss,sass}'],
		tasks: ['compass:dev']
	},
	less: {
		files: ['<%= path.development %>/<%= folder.styles %>/{,**/}*.less'],
		tasks: ['less:dev']
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
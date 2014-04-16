module.exports = {
	options: {
		jshintrc: '.jshintrc'
	},
	all: [
		'<%= path.development %>/<%= folder.scripts %>/{,*/}*.js',
		'!<%= path.development %>/<%= folder.scripts %>/{vendor,components}/{,*/}*.js'
	]
};
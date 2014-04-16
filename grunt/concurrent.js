module.exports = {
	first4rc: [ 'clean:dist', 'copy'],
	second4rc: [ 'compass:dist', 'rig:dist' ],
	third4rc: [ 'imagemin' ],
	fourth4rc: [ 'uglify', 'cssmin' ]
};
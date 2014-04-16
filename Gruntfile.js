'use strict';

module.exports = function( grunt ) {
	require('time-grunt')(grunt);

	require('load-grunt-config')( grunt, {
		config: { //additional config vars
			path: {
				development: 'sources',
				production: 'build',
				http: 'build',
				temp: '.tmp',
				cache: '.cache-frontend',
				test: 'test'
			},
			folder: {
				templates: 'templates',
				scripts: 'js',
				styles: 'css',
				sass: 'sass',
				less: 'less',
				fonts: 'font',
				images: 'img',
				pictures: 'pic',
				components: 'components',
				swf: 'swf',
				video: 'video'
			},
			meta: {
				header: '/* Copyright 2014, INDEE Interactive */\n',
				footer: '\n/* End of source */'
			}
		}
	});
};
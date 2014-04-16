module.exports = {
	dev: {
		options: {
			port: 9000,
			hostname: '*',
			base: [
				'<%= path.temp %>',
				'<%= path.development %>'
			]
		}
	}
};
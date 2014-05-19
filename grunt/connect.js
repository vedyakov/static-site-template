module.exports = {
	dev: {
		options: {
			port: 8081,
			hostname: '*',
			base: [
				'<%= path.temp %>',
				'<%= path.development %>'
			]
		}
	}
};

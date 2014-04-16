module.exports = {
	"d2rc": [
		"clean:dev",
		"rig:dev",
		"compass:dev",
		"connect:dev",
		"watch:rig",
		"watch:compass",
		"watch:livereload"
	],
	"d2rl": [
		"clean:dev",
		"rig:dev",
		"less:dev",
		"connect:dev",
		"watch:rig",
		"watch:less",
		"watch:livereload"
	],
	"d2erc": [
		"clean:dev",
		"ect:dev",
		"rig:dev",
		"compass:dev",
		"connect:dev",
		"watch:ect",
		"watch:rig",
		"watch:compass",
		"watch:livereload"
	],
	"d2erl": [
		"clean:dev",
		"ect:dev",
		"rig:dev",
		"less:dev",
		"connect:dev",
		"watch:ect",
		"watch:rig",
		"watch:compass",
		"watch:livereload"
	],
	"b2rc": [
		"clean:dist",
		"rig:dist",
		"compass:dist",
		"uglify:dist",
		"cssmin:dist",
		"imagemin:dist",
		"copy:dist"
	],
	"b2rl": [
		"clean:dist",
		"rig:dist",
		"less:dist",
		"uglify:dist",
		"cssmin:dist",
		"imagemin:dist",
		"copy:dist"
	],
	"b2erc": [
		"clean:dist",
		"ect:dist",
		"rig:dist",
		"compass:dist",
		"uglify:dist",
		"cssmin:dist",
		"imagemin:dist",
		"copy:dist"
	],
	"b2erl": [
		"clean:dist",
		"ect:dist",
		"rig:dist",
		"less:dist",
		"uglify:dist",
		"cssmin:dist",
		"imagemin:dist",
		"copy:dist"
	],
	"r2rc": [
		"rig:dist",
		"compass:dist",
		"newer:uglify:dist",
		"newer:cssmin:dist",
		"newer:imagemin:dist",
		"newer:copy:dist"
	],
	"r2rl": [
		"rig:dist",
		"newer:less:dist",
		"newer:uglify:dist",
		"newer:cssmin:dist",
		"newer:imagemin:dist",
		"newer:copy:dist"
	],
	"r2erc": [
		"ect:dist",
		"rig:dist",
		"newer:compass:dist",
		"newer:uglify:dist",
		"newer:cssmin:dist",
		"newer:imagemin:dist",
		"newer:copy:dist"
	],
	"r2erl": [
		"ect:dist",
		"rig:dist",
		"newer:less:dist",
		"newer:uglify:dist",
		"newer:cssmin:dist",
		"newer:imagemin:dist",
		"newer:copy:dist"
	],
	"c2rc": [
		"clean:dist",
		"rig:compile",
		"compass:compile",
		"imagemin:dist",
		"copy:dist"
	],
	"c2rl": [
		"clean:dist",
		"rig:compile",
		"less:compile",
		"imagemin:dist",
		"copy:dist"
	],
	"c2erc": [
		"clean:dist",
		"ect:compile",
		"prettify",
		"rig:compile",
		"compass:compile",
		"imagemin:dist",
		"copy:dist"
	],
	"c2erl": [
		"clean:dist",
		"ect:compile",
		"prettify",
		"rig:compile",
		"less:compile",
		"imagemin:dist",
		"copy:dist"
	],
	"server": [
		"d2erl"
	],
	"build": [
		"b2erl"
	],
	"rebuild": [
		"r2erl"
	],
	"compile": [
		"c2erl"
	],
	"default": [
		"build"
	]
}
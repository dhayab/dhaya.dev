/* @see https://github.com/mohsen1/posthtml-favicon-parcel-example/blob/master/.posthtmlrc.js */
module.exports = {
	plugins: {
		'posthtml-favicons': {
			configuration: {
				path: '/',
				appName: 'dhaya.dev',
				background: '#471786',
				theme_color: '#471786',
				display: "minimal-ui",
				icons: {
					android: false,
					appleIcon: true,
					appleStartup: false,
					coast: false,
					favicons: true,
					firefox: false,
					windows: false,
					yandex: false,
				},
			},
		},
	},
};

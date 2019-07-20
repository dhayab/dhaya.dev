/* @see https://github.com/mohsen1/posthtml-favicon-parcel-example/blob/master/.posthtmlrc.js */
module.exports = {
	plugins: {
		'posthtml-favicons': {
			configuration: {
				path: '/',
				background: '#471786',
				theme_color: '#471786',
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

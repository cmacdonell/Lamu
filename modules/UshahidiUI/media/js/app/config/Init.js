/**
 * Ushahidi RequireJS initialisation and config
 *
 * @author     Ushahidi Team <team@ushahidi.com>
 * @copyright  2013 Ushahidi
 * @license    https://www.gnu.org/licenses/agpl-3.0.html GNU Affero General Public License Version 3 (AGPL3)
 */

require.config(
{
	// Set baseurl based on config
	baseUrl : './media/kohana/js/app',
	// 3rd party script alias names (Easier to type 'jquery' than 'libs/jquery, etc')
	// probably a good idea to keep version numbers in the file names for updates checking
	paths :
	{
		'jquery' : '../../bower_components/jquery/dist/jquery',
		'simplepicker' : '../../bower_components/jquery-simplepicker/jquery.simplepicker',
		'underscore' : '../../bower_components/lodash/dist/lodash',
		'backbone' : '../../bower_components/backbone/backbone',
		'marionette' : '../../bower_components/backbone.marionette/lib/backbone.marionette',
		'handlebars' : '../../bower_components/handlebars/handlebars',
		'leaflet' : '../../bower_components/leaflet/leaflet',
		'l.geosearch' : '../../bower_components/L.GeoSearch/src/js',
		'leaflet-locatecontrol' : '../../bower_components/leaflet-locatecontrol/src',
		'jso2' : '../libs/jso2',
		'store' : '../libs/jso2/store',
		'utils' : '../libs/jso2/utils',
		'moment' : '../../bower_components/moment/moment',
		'ddt' : '../../bower_components/ddt/ddt',
		'underscore.string' : '../../bower_components/underscore.string/lib/underscore.string',
		'foundation' : '../../bower_components/foundation/js/foundation',
		'foundation-loader' : '../libs/foundation-loader',
		'backbone.validateAll' : '../../bower_components/Backbone.validateAll/src/javascripts/Backbone.validateAll',
		'backbone-pageable' : '../../bower_components/backbone-pageable/lib/backbone-pageable',
		'handlebars-paginate' : '../libs/handlebars-paginate',
		'backbone-forms' : '../libs/backbone-forms/backbone-forms',
		'bf' : '../libs/backbone-forms/',
		'backbone-validation' : '../../bower_components/backbone.validation/dist/backbone-validation-amd',
		'backbone-model-factory' : '../../bower_components/backbone-model-factory/backbone-model-factory',
		'alertify' : '../../bower_components/alertify/alertify',
		'text' : '../../bower_components/requirejs-text/text',
		'dropzone' : '../../bower_components/dropzone/downloads/dropzone-amd-module',
		'syntaxhighlightjson' : '../libs/syntaxHighlightJson'
	},
	// Sets the configuration for your third party scripts that are not AMD compatible
	shim :
	{
		'backbone' :
		{
			'deps' : ['underscore', 'jquery'],
			// Exports the global window.Backbone object
			'exports' : 'Backbone'
		},
		'marionette' :
		{
			'deps' : ['underscore', 'backbone', 'jquery'],
			// Exports the global window.Marionette object
			'exports' : 'Marionette'
		},
		'handlebars' :
		{
			'exports' : 'Handlebars'
		},

		'leaflet': {
			deps: ['jquery'],
			exports: 'L'
		},
		'l.geosearch/l.control.geosearch': {
			deps: ['leaflet'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.bing': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.esri': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.google': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.nokia': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'l.geosearch/l.geosearch.provider.openstreetmap': {
			deps: ['leaflet', 'l.geosearch/l.control.geosearch'],
			exports: 'L'
		},
		'leaflet-locatecontrol/L.Control.Locate.js': {
			deps: ['leaflet'],
			exports: 'L'
		},

		'moment': {
			exports: 'moment'
		},

		'ddt': {
			exports: 'ddt'
		},

		'syntaxhighlightjson' : {
			deps: ['jquery'],
			exports: 'syntaxHighlight'
		},

		'simplepicker' : {
			deps: ['jquery'],
		},

		'foundation/foundation' : {deps: ['jquery'], exports: 'Foundation'},
		'foundation/foundation.abide': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.accordion': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.alert': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.clearing': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.dropdown': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.equalizer': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.interchange': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.joyride': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.magellan': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.offcanvas': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.orbit': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.reveal': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.slider': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.tab': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.tooltip': {deps: ['jquery', 'foundation/foundation'] },
		'foundation/foundation.topbar': {deps: ['jquery', 'foundation/foundation'] }
	}
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(['App', 'routers/AppRouter', 'controllers/Controller', 'jquery', 'ddt'],
	function(App, AppRouter, Controller, $)
	{
		App.appRouter = new AppRouter(
		{
			controller : new Controller()
		});
		App.start();
		window.App = App;
		$(document).on('click.app', '.js-stub', function(e)
		{
			e.preventDefault();
			var alertify = require('alertify');
			alertify.log('This action has not been implemented yet.');
	});	});

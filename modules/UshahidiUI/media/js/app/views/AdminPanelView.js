define(['marionette', 'handlebars', 'App', 'text!templates/AdminPanel.html'],
	function(Marionette, Handlebars, App, template, setsDropdown, viewsDropdown) {
		return Marionette.ItemView.extend(
		{
			template : Handlebars.compile(template),
			initialize: function() {
			},
		});
	}); 
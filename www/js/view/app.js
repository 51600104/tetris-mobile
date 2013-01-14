(function(exports, $) {

	"use strict";
	
	var AppView = Backbone.View.extend({
		el : "body",

		events : {
			"click #start" : "play"
		},

		initialize : function(options) {
			_.bindAll(this);

			this.$menu = $("#menu");
			this.$playground = $("#playground");
			this.$info = $("#info");

			this.lose = "lose";
			this.win = "win";
			this.mainMediator = null;
			this.render();	
		},

		render : function() {
			this.$playground.hide();
			this.$info.show();
			this.$menu.show();
		},

		play : function() {
			utils.log("singlePlay!!!");

			this.mainMediator = new MainMediator();
			this.gridView = new GridView({id : "grid"});
			this.gridView.setMediator(this.mainMediator);
			this.listenTo(this.gridView, 'finish', this.processFinish);	

			this.$menu.hide();
			this.$playground.fadeIn();

			this.gridView.start();
		},

		processFinish : function(data) {
            alert("Game over! Your score :" + data.score);
            this.render();
		}
	});

	exports.AppView = AppView;

})(this, jQuery);
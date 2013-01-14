(function(exports, $) {

	"use strict";
	
	var AppView = Backbone.View.extend({
		el : "body",

		events : {
			"click #start" : "play",
            "click #inputLeft" : "inputLeft",
            "click #inputRight" : "inputRight",
            "click #inputUp" : "inputUp",
            "click #inputDown" : "inputDown"
		},

		initialize : function(options) {
			_.bindAll(this);

            this.UP = 38;
            this.DOWN = 40;
            this.RIGHT = 39;
            this.LEFT = 37;

			this.$menu = $("#menu");
			this.$playground = $("#playground");
            this.$dPad = $("#dPad");
			this.$info = $("#info");

			this.lose = "lose";
			this.win = "win";
			this.mainMediator = null;
			this.render();	
		},

		render : function() {
			this.$playground.hide();
            this.$dPad.hide()
			this.$info.show();
			this.$menu.show();
		},

		play : function() {
			utils.log("singlePlay!!!");

			this.mainMediator = new Mediator();
			this.gridView = new GridView({id : "grid"});
			this.gridView.setMediator(this.mainMediator);
			this.listenTo(this.gridView, 'finish', this.processFinish);	

			this.$menu.hide();
			this.$playground.fadeIn();
            this.$dPad.fadeIn();
            this.mainMediator.init();
			this.gridView.start();
		},

		processFinish : function(data) {
            alert("Game over! Your score :" + data.score);
            this.render();
		},

        inputLeft : function() {
            this.gridView.handleInput({keyCode : this.LEFT});
        },

        inputRight : function() {
            this.gridView.handleInput({keyCode : this.RIGHT});
        },

        inputUp : function() {
            this.gridView.handleInput({keyCode : this.UP});
        },

        inputDown : function() {
            this.gridView.handleInput({keyCode : this.DOWN});
        }
	});

	exports.AppView = AppView;

})(this, jQuery);
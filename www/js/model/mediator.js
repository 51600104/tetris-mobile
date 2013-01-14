(function(exports, $) {

	"use strict";

	function Mediator() {
		this.currentTetrimino = null;
		this.nextTetrimino = null;
	}

	Mediator.prototype.reset = function() {
		this.currentTetrimino = null;
		this.nextTetrimino = null;
	};

	Mediator.prototype.getTetromino = function() {
		var temp = this.currentTetrimino;
		this.currentTetrimino = this.nextTetrimino;
		this.nextTetrimino = Tetris.create();
		return temp;
	};

    Mediator.prototype.init = function() {
		this.currentTetrimino = Tetris.create();
		this.nextTetrimino = Tetris.create();
	};

    Mediator.prototype.update = function() {

    };

	exports.Mediator = Mediator;

})(this, jQuery);
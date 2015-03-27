define(["require", "game"], function(require, game) {
  var main_menu;
  main_menu = {
    create: function() {},
    ready: function() {},
    step: function(delta) {},
    render: function(delta) {
      game.layer.clear("#FFF");
      return game.layer.fillStyle("#000").font("64px Arial").fillText("Click The Mouse To Play!!!", 100 / game.scale, 100 / game.scale);
    },
    mousedown: function(event) {},
    mouseup: function(event) {},
    mousemove: function(event) {},
    keydown: function(event) {},
    keyup: function(event) {},
    touchstart: function(event) {},
    touchend: function(event) {
      return game.setState(require("game_screen"));
    },
    touchmove: function(event) {}
  };
  return main_menu;
});

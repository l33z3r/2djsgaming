define(["require", "jquery", "canvasquery", "playground", "game", "main_menu", "game_screen"], function(require, $, cq, playground, game, main_menu, game_screen) {
  game.main_menu = main_menu;
  return game.game_screen = game_screen;
});

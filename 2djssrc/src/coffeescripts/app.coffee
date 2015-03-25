define ["require", "jquery", "canvasquery", "playground", "game", "main_menu", "game_screen"],
(require, $, cq, playground, game, main_menu, game_screen) ->
	#this is the entry point into your app
	game.main_menu = main_menu
	game.game_screen = game_screen
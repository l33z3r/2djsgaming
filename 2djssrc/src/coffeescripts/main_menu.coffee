define ["require", "game"], (require, game) ->
  main_menu =
    create: ->

    ready: ->

    step: (delta) ->

    render: (delta) ->
      game.layer.clear "#FFF"
      game.layer.fillStyle("#000").font("64px Arial").fillText "Click The Mouse To Play!!!", 100 / game.scale, 100 / game.scale

    mousedown: (event) ->

    mouseup: (event) ->

    mousemove: (event) ->

    keydown: (event) ->

    keyup: (event) ->

    touchstart: (event) ->

    touchend: (event) ->
      game.setState require("game_screen")

    touchmove: (event) ->

  return main_menu
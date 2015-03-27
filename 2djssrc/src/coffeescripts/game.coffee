define ["require", "playground"], (require, playground) ->

  game = playground
    mouseToTouch: true

    width: 1600
    height: 900
    scaleToFit: true

    paths: {
      images: "/images/"
    }

    create: ->


    ready: ->
      @setState require("main_menu")

  return game
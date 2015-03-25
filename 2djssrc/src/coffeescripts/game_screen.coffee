define ["game"]
, (game) ->

  game_screen =
    gameWidth: 1600
    gameHeight: 900

    x: 10
    y: 10

    lastTouchX: 0
    lastTouchY: 0

    followLastTouch: false

    enter: ->

    ready: ->

    step: (delta) ->
      @checkKeyPresses()
      @checkTouches()

      #make sure we don't go outside the screen bounds
      if @x < 0
        @x = 0

      if @x > @gameWidth - 60
        @x = @gameWidth - 60

      if @y < 0
        @y = 0

      if @y > @gameHeight - 60
        @y = @gameHeight - 60

    render: (delta) ->
      game.layer.clear("#7EC0EE")
      .fillStyle("red")
      .fillRect(@x, @y, 50, 50)

      #game.layer.drawRegion player.getImage(), player.getNextSprite(), x, y

    mousedown: (event) ->

    mouseup: (event) ->

    mousemove: (event) ->

    keydown: (event) ->
      @followLastTouch = false

    keyup: (event) ->

    touchstart: (event) ->
      @followLastTouch = true
      @lastTouchX = event.x
      @lastTouchY = event.y

    touchend: (event) ->

    touchmove: (event) ->

    checkKeyPresses: ->
      if game.keyboard.keys["right"]
        @x+=20
      else if game.keyboard.keys["left"]
        @x-=20

      if game.keyboard.keys["up"]
        @y-=20
      else if game.keyboard.keys["down"]
        @y+=20

    checkTouches: ->
      if @followLastTouch
        console.log(@lastTouchX + " " + @lastTouchY)
        #move the object towards the current touch

        if @lastTouchX >= @x
          @x+=20

        if @lastTouchX < @x
          @x-=20

        if @lastTouchY >= @y
          @y+=20

        if @lastTouchY < @y
          @y-=20



  return game_screen
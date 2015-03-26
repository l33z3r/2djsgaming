define ["./Player", "./Point", "game"]
, (Player, Point, game) ->

  game_screen =
    gameWidth: 1600
    gameHeight: 900

    lastTouchX: 0
    lastTouchY: 0

    followLastTouch: false

    enter: ->
      game.loadImages "bird_left"
      game.loadImages "bird_right"

      @player = new Player(new Point(100, 100))

    ready: ->

    step: (delta) ->
      @checkKeyPresses()
      @checkTouches()

      #make sure we don't go outside the screen bounds
      if @player.position.x < 0
        @player.position.x = 0

      if @player.position.x > @gameWidth - 60
        @player.position.x = @gameWidth - 60

      if @player.position.y < 0
        @player.position.y = 0

      if @player.position.y > @gameHeight - 60
        @player.position.y = @gameHeight - 60

    render: (delta) ->
      game.layer.clear("#7EC0EE")
      #.fillStyle("red")
      #.fillRect(@player.position.x, @player.position.y, 50, 50)

      game.layer.drawRegion @player.getImage(), @player.getNextSprite(), @player.position.x, @player.position.y

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
        @player.position.x+=20
        @player.orientation = "right"
      else if game.keyboard.keys["left"]
        @player.position.x-=20
        @player.orientation = "left"

      if game.keyboard.keys["up"]
        @player.position.y-=20
      else if game.keyboard.keys["down"]
        @player.position.y+=20

    checkTouches: ->
      if @followLastTouch
        console.log(@lastTouchX + " " + @lastTouchY)
        #move the object towards the current touch

        if @lastTouchX >= @player.position.x
          @player.position.x+=20
          @player.orientation = "right"

        if @lastTouchX < @player.position.x
          @player.position.x-=20
          @player.orientation = "left"

        if @lastTouchY >= @player.position.y
          @player.position.y+=20

        if @lastTouchY < @player.position.y
          @player.position.y-=20

  return game_screen
define ["./Point", "game"], (Point, game) ->
	Player = (initialPosition) ->
		@position = initialPosition
		@lastTick = 0
		@duration = 1
		@orientation = "right"

	Player::getNextSprite = ->
	  delta = (Date.now() - @lastTick) / 1000
	  frame = 8 * (delta % @duration / @duration) | 0
	  
	  offset = 19

	  sprite = [
	    offset + (frame * 109)
	    28
	    109
	    100
	  ]
	  
	  #console.log(frame + " " + sprite);
	  sprite
	
	Player::getImage = ->
		if @orientation is "left"
			game.images.bird_left
		else
			game.images.bird_right

	return Player
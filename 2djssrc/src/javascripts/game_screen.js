define(["./Player", "./Point", "game"], function(Player, Point, game) {
  var game_screen;
  game_screen = {
    gameWidth: 1600,
    gameHeight: 900,
    lastTouchX: 0,
    lastTouchY: 0,
    followLastTouch: false,
    enter: function() {
      game.loadImages("bird_left");
      game.loadImages("bird_right");
      return this.player = new Player(new Point(100, 100));
    },
    ready: function() {},
    step: function(delta) {
      this.checkKeyPresses();
      this.checkTouches();
      if (this.player.position.x < 0) {
        this.player.position.x = 0;
      }
      if (this.player.position.x > this.gameWidth - 60) {
        this.player.position.x = this.gameWidth - 60;
      }
      if (this.player.position.y < 0) {
        this.player.position.y = 0;
      }
      if (this.player.position.y > this.gameHeight - 60) {
        return this.player.position.y = this.gameHeight - 60;
      }
    },
    render: function(delta) {
      game.layer.clear("#7EC0EE");
      return game.layer.drawRegion(this.player.getImage(), this.player.getNextSprite(), this.player.position.x, this.player.position.y);
    },
    mousedown: function(event) {},
    mouseup: function(event) {},
    mousemove: function(event) {},
    keydown: function(event) {
      return this.followLastTouch = false;
    },
    keyup: function(event) {},
    touchstart: function(event) {
      this.followLastTouch = true;
      this.lastTouchX = event.x;
      return this.lastTouchY = event.y;
    },
    touchend: function(event) {},
    touchmove: function(event) {},
    checkKeyPresses: function() {
      if (game.keyboard.keys["right"]) {
        this.player.position.x += 20;
        this.player.orientation = "right";
      } else if (game.keyboard.keys["left"]) {
        this.player.position.x -= 20;
        this.player.orientation = "left";
      }
      if (game.keyboard.keys["up"]) {
        return this.player.position.y -= 20;
      } else if (game.keyboard.keys["down"]) {
        return this.player.position.y += 20;
      }
    },
    checkTouches: function() {
      if (this.followLastTouch) {
        console.log(this.lastTouchX + " " + this.lastTouchY);
        if (this.lastTouchX >= this.player.position.x) {
          this.player.position.x += 20;
          this.player.orientation = "right";
        }
        if (this.lastTouchX < this.player.position.x) {
          this.player.position.x -= 20;
          this.player.orientation = "left";
        }
        if (this.lastTouchY >= this.player.position.y) {
          this.player.position.y += 20;
        }
        if (this.lastTouchY < this.player.position.y) {
          return this.player.position.y -= 20;
        }
      }
    }
  };
  return game_screen;
});

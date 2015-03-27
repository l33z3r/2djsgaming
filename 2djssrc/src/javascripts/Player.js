define(["./Point", "game"], function(Point, game) {
  var Player;
  Player = function(initialPosition) {
    this.position = initialPosition;
    this.lastTick = 0;
    this.duration = 1;
    return this.orientation = "right";
  };
  Player.prototype.getNextSprite = function() {
    var delta, frame, offset, sprite;
    delta = (Date.now() - this.lastTick) / 1000;
    frame = 8 * (delta % this.duration / this.duration) | 0;
    offset = 19;
    sprite = [offset + (frame * 109), 28, 109, 100];
    return sprite;
  };
  Player.prototype.getImage = function() {
    if (this.orientation === "left") {
      return game.images.bird_left;
    } else {
      return game.images.bird_right;
    }
  };
  return Player;
});

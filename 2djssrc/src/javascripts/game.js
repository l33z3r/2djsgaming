define(["require", "playground"], function(require, playground) {
  var game;
  game = playground({
    mouseToTouch: true,
    width: 1600,
    height: 900,
    scaleToFit: true,
    paths: {
      images: "/images/"
    },
    create: function() {},
    ready: function() {
      return this.setState(require("main_menu"));
    }
  });
  return game;
});

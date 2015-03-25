require.config({
  shim: {
    playground: {
      deps: ["canvasquery"],
      exports: "playground"
    },
    canvasquery: {
      exports: "cq"
    },
    brain: {
      exports: "brain"
    }
  },
  paths: {
    jquery: "bower_lib/jquery/dist/jquery",
    canvasquery: "lib/canvasquery",
    playground: "lib/playground",
    brain: "lib/brain"
  }
});

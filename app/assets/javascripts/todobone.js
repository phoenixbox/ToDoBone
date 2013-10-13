window.Todobone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Todobone.Routers.Entries();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Todobone.initialize();
});

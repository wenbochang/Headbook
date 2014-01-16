window.FriendsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FriendsApp.Routers.Router({
      $rootEl: $("body")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  FriendsApp.initialize();
});

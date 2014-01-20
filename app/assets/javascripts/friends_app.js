window.FriendsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    new FriendsApp.Routers.Router({
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }

};

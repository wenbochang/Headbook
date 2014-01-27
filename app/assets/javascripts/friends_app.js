window.FriendsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    if (FriendsApp.user_id) {
      FriendsApp.circles = new FriendsApp.Collections.Circles();
      FriendsApp.circles.fetch({
        success: function() {
          new FriendsApp.Routers.Router({
            $rootEl: $("#content")
          });
          Backbone.history.start();
        }
      });
    }
  }

};

$(document).ready(function(){
  FriendsApp.initialize();
});


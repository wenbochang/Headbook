FriendsApp.Collections.Circles = Backbone.Collection.extend({
  url: function() {
    return "users/" + FriendsApp.user_id + "/circles"
  },

  model: FriendsApp.Models.Circle
});

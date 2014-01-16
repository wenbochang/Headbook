FriendsApp.Collections.Posts = Backbone.Collection.extend({
  url: function() {
    return "users/" + FriendsApp.user_id + "/posts"
  },

  model: FriendsApp.Models.Post

});

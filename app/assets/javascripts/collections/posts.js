FriendsApp.Collections.Posts = Backbone.Collection.extend({
  url: function() {
    return "users/" + FriendsApp.user_id + "/posts"
  },

  model: FriendsApp.Models.Post,

  comparator: function(post) {
    var time = new Date(post.get("updated_at"))
    return -time;
  }
});

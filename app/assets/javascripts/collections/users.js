FriendsApp.Collections.Users = Backbone.Collection.extend({
  url: "users",

  model: FriendsApp.Models.User,

  comparator: function(user) {
    return user.escape("username");
  }
});

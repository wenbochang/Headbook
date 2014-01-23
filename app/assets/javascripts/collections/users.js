FriendsApp.Collections.Users = Backbone.Collection.extend({
  url: "/memberships",

  model: FriendsApp.Models.User,

  comparator: function(user) {
    return user.escape("username");
  }
});

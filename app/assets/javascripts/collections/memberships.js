FriendsApp.Collections.Memberships = Backbone.Collection.extend({
  url: "/memberships",

  model: FriendsApp.Models.Membership,

  comparator: function(m) {
    return m.get("list_index");
  }
});

FriendsApp.Models.Circle = Backbone.Model.extend({
  parse: function (data) {
    data.members = new FriendsApp.Collections.Members(data.members);
    return data;
  }
});

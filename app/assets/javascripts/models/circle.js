FriendsApp.Models.Circle = Backbone.Model.extend({
  parse: function (data) {
    //data.members = new FriendsApp.Collections.Members(data.members);
    //data.memberships = new FriendsApp.Collections.Members(data.memberships);
    return data;
  }
});

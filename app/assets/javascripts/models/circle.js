FriendsApp.Models.Circle = Backbone.Model.extend({
  parse: function(data) {
    data.memberships = new FriendsApp.Collections.Memberships(
      data.memberships 
    );
    return data;
  }
});

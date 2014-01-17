FriendsApp.Collections.Photos = Backbone.Collection.extend({
  url: function() {
    return "users/" + FriendsApp.user_id + "/photos"
  },

  model: FriendsApp.Models.Photo
})

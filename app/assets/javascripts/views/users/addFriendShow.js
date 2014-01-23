FriendsApp.Views.AddFriendShow = Backbone.View.extend({
  tagName: "li",

  template: JST["users/show"],

  events: {
    "click .request": "sendRequest"
  },

  render: function() {
    var renderedContent = this.template({
      user: this.model
    });
    this.$el.html(renderedContent);
    this.$el.addClass("list-group-item");
    return this;
  },

  sendRequest: function(event) {
    //custom request to add a Stranger membership between users
    event.preventDefault();
    //in our strangers circle, add user we send request to
    var our_stranger_circle = FriendsApp.circles.find( 
      function(model) { 
        return model.escape("circle_name") === "Strangers";
      } 
    )
    FriendsApp.users.create({ 
      circle_id: our_stranger_circle.id,
      user_id: this.model.id 
    });

    $.ajax({
      url: "/friendRequests",
      type: "POST",
      data: {
        from_user_id: FriendsApp.user_id, 
        to_user_id: this.model.id
      },
      success: function() {
        console.log("success!");
      }
    });
  }

});

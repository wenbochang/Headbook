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

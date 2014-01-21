FriendsApp.Views.UserShow = Backbone.View.extend({
  template: JST["users/show"],

  events: {
    "click .request": "sendRequest"
  },

  render: function() {
    var renderedContent = this.template({
      user: this.model
    });
    this.$el.html(renderedContent);
    this.$el.attr("class", "row");
    return this;
  },

  sendRequest: function(event) {
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

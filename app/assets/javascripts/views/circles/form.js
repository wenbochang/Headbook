FriendsApp.Views.CircleForm = Backbone.View.extend({
  tagName: "form",

  template: JST["circles/form"],

  events: {
    "click #new-circle-btn": "submit"
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var newCircleName = this.$("#new-circle-name").val();
    FriendsApp.circles.create({
      circle_name: newCircleName,
      user_id: FriendsApp.user_id
    });
  }


});

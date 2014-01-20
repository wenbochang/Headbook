FriendsApp.Views.CircleShow = Backbone.View.extend({
  template: JST["circles/show"],

  events: {
  },

  render: function() {
    var renderedContent = this.template({
      circle: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});

FriendsApp.Views.CircleShow = Backbone.View.extend({
  template: JST["circles/show"],

  events: {
    "click .close": "destroy"
  },

  render: function() {
    var renderedContent = this.template({
      circle: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  destroy: function() {
    this.model.destroy()
  }
});

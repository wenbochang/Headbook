FriendsApp.Views.PhotoShow = Backbone.View.extend({
  template: JST["photos/show"],

  tagName: "li",

  events: {
  },

  initialize: function() {
  },

  render: function() {
    var renderedPhoto = this.template({
      photo: this.model
    });
    this.$el.html(renderedPhoto);
    
    return this;
  }
})

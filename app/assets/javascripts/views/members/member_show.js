FriendsApp.Views.MemberShow = Backbone.View.extend({
  template: JST["members/show"],

  events: {
  },

  render: function() {
    var renderedContent = this.template({
      member: this.model
    });
    this.$el.html(renderedContent);
    this.$el.draggable()
    return this;
  },

});


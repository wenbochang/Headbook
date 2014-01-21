FriendsApp.Views.MemberShow = Backbone.View.extend({
  template: JST["members/show"],

  events: {
  },

  render: function() {
    var renderedContent = this.template({
      membership: this.model
    });
    this.$el.html(renderedContent);
    this.$el.attr("data-membership-id", this.model.id);
    return this;
  },

});


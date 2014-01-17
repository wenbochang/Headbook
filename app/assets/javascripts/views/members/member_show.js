FriendsApp.Views.MemberShow = Backbone.View.extend({
  template: JST["members/show"],

  events: {
  },

  initialize: function(options) {
    this.members = options.members;
  },

  render: function() {
    var renderedContent = this.template({
      members: this.members
    });
    this.$el.html(renderedContent);
    return this;
  }

});


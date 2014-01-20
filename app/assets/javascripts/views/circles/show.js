FriendsApp.Views.CircleShow = Backbone.View.extend({
  template: JST["circles/show"],

  events: {
    "click .circle-close": "destroy",
    "click .circle-minimize": "minimize"
  },

  render: function() {
    var renderedContent = this.template({
      circle: this.model
    });
    this.$el.html(renderedContent);
    this.renderMembers();
    return this;
  },

  renderMembers: function() {
    var circleContainer = this.$(".circle-members");
    var memberView = new FriendsApp.Views.MembersIndex({
      members: this.model.get("members")
    });
    circleContainer.html(memberView.render().$el);
  },

  minimize: function() {
    this.model.set({display: "false"});
    this.model.save();
  },

  destroy: function() {
    this.model.destroy();
  }

});

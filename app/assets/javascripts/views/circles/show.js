FriendsApp.Views.CircleShow = Backbone.View.extend({
  template: JST["circles/show"],

  events: {
    "click .circle-close": "destroy",
    "click .circle-minimize": "minimize",
    "drop": "dropped"
  },

  render: function() {
    var view = this;
    var renderedContent = this.template({
      circle: this.model
    });
    this.$el.html(renderedContent);
    this.$el.addClass("col-xs-3 friend-circle");
    this.$el.attr("data-id", this.model.id);
    this.$el.droppable();
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

  dropped: function(event, ui) {
    debugger
  },

  minimize: function() {
    this.model.set({display: "false"});
    this.model.save();
  },

  destroy: function() {
    this.model.destroy();
  }

});

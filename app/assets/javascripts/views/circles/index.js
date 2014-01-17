FriendsApp.Views.CirclesIndex = Backbone.View.extend({
  template: JST["circles/index"],

  events: {
  },

  initialize: function(options) {
    this.circles = options.circles;

    var view = this;
    var events = ["add", "remove"];
    _(events).each(function (event) {
      view.listenTo(view.circles, event, view.render);
    });
  },

  render: function() {
    var renderedContent = this.template({
      circles: this.circles
    });
    this.$el.html(renderedContent);
    this.renderMembers();
    return this;
  },
 
  renderMembers: function() {
    var view = this;
    this.circles.each( function(circle) {
      var c = view.$(".circle-members[data-id=" + circle.id + "]");
      var memberView = new FriendsApp.Views.MemberShow({
        members: circle.get("members")
      });
      c.append(memberView.render().$el);
    });
  }
});

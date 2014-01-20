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
    var view = this;
    this.circles.fetch({
      success: function() {
        view.$el.html(view.template());
        view.renderCircleForm();
        view.renderCircles();
        view.renderMembers();
      }
    });
    return this;
  },

  renderCircleForm: function() {
    var formView = new FriendsApp.Views.CircleForm();
    this.$el.append(formView.render().$el);
  },

  renderCircles: function() {
    var view = this;
    view.circles.each( function(circle) {
      if (circle.escape("display") === "false") return;

      var showView = new FriendsApp.Views.CircleShow({
        model: circle
      }); 
      view.$el.append(showView.render().$el);
    });
  },
 
  renderMembers: function() {
    var view = this;
    this.circles.each( function(circle) {
      var circleContainer = view.$(".circle-members[data-id=" + circle.id + "]");
      var memberView = new FriendsApp.Views.MemberShow({
        members: circle.get("members")
      });
      circleContainer.append(memberView.render().$el);
    });
  }
});

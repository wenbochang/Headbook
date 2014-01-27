FriendsApp.Views.CirclesIndex = Backbone.View.extend({
  template: JST["circles/index"],

  events: {
  },

  initialize: function() {
    this.circles = FriendsApp.circles;

    var view = this;
    var events = ["add", "change:display", "remove"]; 
    _(events).each(function (event) {
      view.listenTo(view.circles, event, view.render);
    });
  },

  render: function() {
    var view = this;
    FriendsApp.memberships.fetch({
      success: function() {
        view.$el.html(view.template());
        view.renderCircleForm();
        view.renderCircleDropdown();
        view.renderCircles();
      }
    });
    return this;
  },

  renderCircleForm: function() {
    var formView = new FriendsApp.Views.CircleForm();
    this.$("#circle-header").append(formView.render().$el);
  },

  renderCircleDropdown: function() {
    var dropDownIndexView = new FriendsApp.Views.CircleDropdownIndex();
    this.$("#circle-header").append(dropDownIndexView.render().$el);
  },

  renderCircles: function() {
    var view = this;
    view.circles.each( function(circle) {
      if (circle.escape("display") === "false") return;

      var showView = new FriendsApp.Views.CircleShow({
        model: circle
      }); 
      view.$("#circle-body").append(showView.render().$el);
    });
  }
});

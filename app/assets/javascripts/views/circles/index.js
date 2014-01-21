FriendsApp.Views.CirclesIndex = Backbone.View.extend({
  template: JST["circles/index"],

  events: {
  },

  initialize: function(options) {
    this.circles = options.circles;

    var view = this;
    var events = ["add", "change:display", "remove"]; 
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
      view.$el.append(showView.render().$el);
    });
  },

//reference for using data ID 
//      var circleContainer = view.$(".circle-members[data-id=" + circle.id + "]");
});

FriendsApp.Views.CircleDropdownIndex = Backbone.View.extend({
  template: JST["circles/dropdownIndex"],

  render: function() {
    var view = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    //render hidden circles
    FriendsApp.circles.each( function(circle) {
      if (circle.escape("display") === "") return;
      
      var dropdownShowView = new FriendsApp.Views.CircleDropdownShow({
        model: circle
      });

      view.$(".circle-hidden-ul").append(dropdownShowView.render().$el);
    });

    return this;
  }

});

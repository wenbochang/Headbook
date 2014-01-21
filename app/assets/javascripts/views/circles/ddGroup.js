FriendsApp.Views.CircleDropdownIndex = Backbone.View.extend({
  template: JST["circles/ddGroup"],

  render: function() {
    var view = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.$el.attr("class", "col-xs-2");

    //show hidden circles in dropdown
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

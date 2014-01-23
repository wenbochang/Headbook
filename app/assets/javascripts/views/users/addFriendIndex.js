FriendsApp.Views.AddFriendIndex = Backbone.View.extend({
  tagName: "ul",

  initialize: function() {
    this.listenTo(FriendsApp.users, "add", this.render);
  }, 

  render: function() {
    var view = this;
        view.$el.html();
        view.$el.addClass("list-group col-xs-6")
        view.renderUsers.bind(view)();
//    FriendsApp.users.fetch({
//      success: function() {
//        view.$el.html();
//        view.$el.addClass("list-group col-xs-6")
//        view.renderUsers.bind(view)();
//      }
//    });
    return this;
  },

  renderUsers: function() {
    var view = this;
    FriendsApp.users.each( function(user) {
      if (FriendsApp.user_id === user.id) return;

      var showView = new FriendsApp.Views.AddFriendShow({
        model: user
      });
      view.$el.append(showView.render().$el);
    });
  }

});

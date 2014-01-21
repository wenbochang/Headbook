FriendsApp.Views.UsersIndex = Backbone.View.extend({
  render: function() {
    var view = this;
    FriendsApp.users.fetch({
      success: function() {
        view.$el.html();

        FriendsApp.users.each( function(user) {
          if (FriendsApp.user_id === user.id) return;

          var showView = new FriendsApp.Views.UserShow({
            model: user
          });

          view.$el.append(showView.render().$el);
        });
      }
    });
    return this;
  }

});

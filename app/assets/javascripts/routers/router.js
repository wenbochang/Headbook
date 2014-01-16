FriendsApp.Routers.Router = Backbone.Router.extend({
  routes: {
    "posts": "posts_index"
  },

  initialize: function(options){
    FriendsApp.posts = new FriendsApp.Collections.Posts();
    this.$rootEl = options.$rootEl;
  },

  posts_index: function(){
    FriendsApp.posts.fetch({
      success: function() {
        var view = new FriendsApp.View.PostsIndex({
          collection: FriendsApp.posts
        });
        _swapView(view);
      }
    });
  },

  _swapView: function(newView) {
    this.oldView && this.oldView.remove();
    this.oldView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});

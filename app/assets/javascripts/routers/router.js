FriendsApp.Routers.Router = Backbone.Router.extend({
  routes: {
    "posts": "posts_index",
    "photos": "photos_index"
  },

  initialize: function(options){
    FriendsApp.posts = new FriendsApp.Collections.Posts();
    this.$rootEl = options.$rootEl;
  },

  posts_index: function(){
    var router = this;
    FriendsApp.posts.fetch({
      success: function() {
        var view = new FriendsApp.Views.PostsIndex({
          collection: FriendsApp.posts
        });
        router._swapView(view);
      }
    });
  },

  _swapView: function(newView) {
    this.oldView && this.oldView.remove();
    this.oldView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});

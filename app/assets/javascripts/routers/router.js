FriendsApp.Routers.Router = Backbone.Router.extend({
  routes: {
    "posts": "posts_index",
    "photos": "photos_index"
  },

  initialize: function(options){
    FriendsApp.posts = new FriendsApp.Collections.Posts();
    FriendsApp.photos = new FriendsApp.Collections.Photos();
    FriendsApp.circles = new FriendsApp.Collections.Circles();
    FriendsApp.circles.fetch();
    this.$rootEl = options.$rootEl;
  },

  posts_index: function(){
    var router = this;
    FriendsApp.posts.fetch({
      success: function() {
        var view = new FriendsApp.Views.PostsIndex({
          posts: FriendsApp.posts,
          circles: FriendsApp.circles
        });
        router._swapView(view);
      }
    });
  },

  photos_index: function(){
    var router = this;
    FriendsApp.photos.fetch({
      success: function() {
        var view = new FriendsApp.Views.PhotosIndex({
          collection: FriendsApp.photos
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

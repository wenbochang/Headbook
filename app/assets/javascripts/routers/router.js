FriendsApp.Routers.Router = Backbone.Router.extend({
  routes: {
    "posts": "postsIndex",
    "photos": "photosIndex",
    "circles": "circlesIndex",
    "users": "usersIndex"
  },

  initialize: function(options){
    this.makeCollections();
    this.$rootEl = options.$rootEl;
  },

  makeCollections: function() {
    FriendsApp.posts = new FriendsApp.Collections.Posts();
    FriendsApp.photos = new FriendsApp.Collections.Photos();
    FriendsApp.circles = new FriendsApp.Collections.Circles();
    FriendsApp.users = new FriendsApp.Collections.Users();

    //this fetch must be done so posts/photos have circles
    if (FriendsApp.user_id) {
      FriendsApp.circles.fetch();
    }
  },

  circlesIndex: function() {
    var router = this;
    var view = new FriendsApp.Views.CirclesIndex();
    router._swapView(view);
  },

  postsIndex: function(){
    var router = this;
    var view = new FriendsApp.Views.PostsIndex({
      posts: FriendsApp.posts
    });
    router._swapView(view);
  },

  photosIndex: function(){
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

  usersIndex: function() {
    var router = this;
    FriendsApp.users.fetch({
      success: function() {
        var view = new FriendsApp.Views.UsersIndex({
          collection: FriendsApp.users
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

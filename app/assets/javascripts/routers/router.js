FriendsApp.Routers.Router = Backbone.Router.extend({
  routes: {
    "thoughts": "postsIndex",
    "photos": "photosIndex",
    "circles": "circlesIndex",
    "add-friend": "addFriendIndex"
  },

  initialize: function(options){
    this.makeCollections();
    this.$rootEl = options.$rootEl;
  },

  makeCollections: function() {
    FriendsApp.posts = new FriendsApp.Collections.Posts();
    FriendsApp.photos = new FriendsApp.Collections.Photos();
    FriendsApp.memberships = new FriendsApp.Collections.Memberships();
  },

  circlesIndex: function() {
    var router = this;
    var view = new FriendsApp.Views.CirclesIndex();
    router._swapView(view);
  },

  postsIndex: function(){
    var router = this;
    FriendsApp.posts.fetch({
      success: function() {
        var view = new FriendsApp.Views.PostsIndex()
        router._swapView(view)
      }  
    });
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

  _swapView: function(newView) {
    this.oldView && this.oldView.remove();
    this.oldView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});

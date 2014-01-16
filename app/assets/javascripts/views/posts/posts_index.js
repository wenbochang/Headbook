FriendsApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],

  render: function() {
    var renderedContent = template({
      posts: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }

})
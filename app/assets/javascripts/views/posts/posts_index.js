FriendsApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],

  events: {
    "click #new-post-btn": "newPost"
  },

  initialize: function() {
    var view = this;
    var events = ["add", "change:title", "remove", "reset"];
    _(events).each(function (event) {
      view.listenTo(view.collection, event, view.render);
    });
  },

  render: function() {
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },

  newPost: function(event) {
    event.preventDefault();
    var user_id = FriendsApp.user_id;
    var body = $("#post-body").val();
    var circle_id = $("#post-circle-id").val();
    this.collection.create({ user_id: user_id, 
      body: body, circle_id: circle_id });
  }

})

FriendsApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],

  events: {
    "click #new-post-btn": "submit"
  },

  initialize: function(options) {
    this.posts= options.posts;

    var view = this;
    var events = ["add", "remove"];
    _(events).each(function (event) {
      view.listenTo(view.posts, event, view.render);
    });
  },

  render: function() {
    var renderedContent = this.template({
      posts: this.posts,
      circles: FriendsApp.circles
    });
    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var user_id = FriendsApp.user_id;
    var body = $("#post-body").val();
    var circle_id = $("#post-circle-id").val();
    this.posts.create({ user_id: user_id, 
      body: body, circle_id: circle_id });
  }

})

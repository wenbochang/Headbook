FriendsApp.Views.PostsIndex = Backbone.View.extend({
  formTemplate: JST["posts/index"],

  postTemplate: JST["posts/show"],

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
    FriendsApp.circles.fetch({
      success: this.renderForm()
    });
    FriendsApp.posts.fetch({
      success: this.renderPosts()
    });
    return this;
  },

  renderForm: function() {
    var renderedForm = this.formTemplate({
      circles: FriendsApp.circles
    });
    this.$el.html(renderedForm);
  },

  renderPosts: function() {
    var view = this;
    this.posts.each( function(post) {
      var renderedPost = view.postTemplate({
        post: post
      });

      view.$(".posts-container").append(renderedPost);
    });
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget.form).serializeJSON();
    attrs.user_id = FriendsApp.user_id;
    this.posts.create(attrs);
  }

})

FriendsApp.Views.PhotosIndex = Backbone.View.extend({
  template: JST["photos/index"],

  events: {
    "click #new-photo-btn": "submit"
  },

  initialize: function() {
    var view = this;
    var events = ["add", "change:title", "remove", "reset"];
    _(events).each(function (event) {
      view.listenTo(view.collection, event, view.render);
    });
  },

  render: function() {
    var view = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    this.collection.each(function(photo) {
      var photoView = new FriendsApp.Views.PhotoShow({
        model: photo
      });
      view.$("#photos-ul").append(photoView.render().$el);
    });

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    console.log("new photo")
    var user_id = FriendsApp.user_id;
    var title = $("#photo-title").val();
    var url = $("#photo-url").val();
    var circle_id = $("#photo-circle-id").val();
    this.collection.create({ user_id: user_id, 
      title: title, url: url, circle_id: circle_id });
  }

})

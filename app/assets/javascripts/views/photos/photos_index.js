FriendsApp.Views.PhotosIndex = Backbone.View.extend({
  template: JST["photos/index"],

  initialize: function() {
    var view = this;
    var events = ["add", "change:title", "remove", "reset"];
    _(events).each(function (event) {
      view.listenTo(view.collection, event, view.render);
    });
  },

  render: function() {
    var view = this;
    var formView = new FriendsApp.Views.PhotoForm({
      collection: view.collection,
      model: new FriendsApp.Models.Photo()
    });
    this.$el.html(formView.render().$el);

    this.collection.each(function(photo) {
      var photoView = new FriendsApp.Views.PhotoShow({
        model: photo
      });
      view.$el.append(photoView.render().$el);
    });

    return this;
  }

});

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
    $('.modal-backdrop').remove();

    var view = this;
    this.collection.fetch({
      success: function() {
        view.$el.html(view.template());
        view.renderFormModal();
        view.renderPhotos();
      }
    });
    return this;
  },

  renderFormModal: function() {
    var view = this;
    var formView = new FriendsApp.Views.PhotoForm({
      collection: view.collection,
      model: new FriendsApp.Models.Photo()
    });
    view.$el.prepend(formView.render().$el);
  },

  renderPhotos: function() {
    var view = this;
    view.collection.each(function(photo) {
      var photoView = new FriendsApp.Views.PhotoShow({
        model: photo
      });
      view.$(".photo-container").append(photoView.render().$el);
    });
  }
});

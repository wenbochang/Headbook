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

    //first fetch collection of photos
    this.collection.fetch({
      success: function() {

        //render form modal (initially hidden)
        var formView = new FriendsApp.Views.PhotoForm({
          collection: view.collection,
          model: new FriendsApp.Models.Photo()
        });
        view.$el.html(formView.render().$el);

        //render each photo
        view.collection.each(function(photo) {
          var photoView = new FriendsApp.Views.PhotoShow({
            model: photo
          });
          view.$el.append(photoView.render().$el);
        });
      }
    });
    return this;
  }

});

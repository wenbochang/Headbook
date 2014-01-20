FriendsApp.Views.PhotoForm = Backbone.View.extend({
  template: JST["photos/form"],

  events: {
    "click #new-photo-btn": "submit",
    "change input[type=file]": "encodeFile"
  },

  render: function() {
    var view = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  encodeFile: function (event) {
    var that = this;
    var file = event.currentTarget.files[0];
    
    var reader = new FileReader();
    reader.onload = function(event) {
      that.photoFile = event.target.result;
    }
    reader.onerror = function(stuff) {
        console.log("error", stuff)
        console.log (stuff.getMessage())
    }
    reader.readAsDataURL(file);
  },

  submit: function(event) {

    var attrs = $(event.currentTarget.form).serializeJSON();
    attrs.photo.user_id = FriendsApp.user_id;
    attrs.photo.file = this.photoFile;
    this.model.set(attrs);
    this.collection.create( this.model );
  }
});

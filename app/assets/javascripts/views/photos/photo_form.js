FriendsApp.Views.PhotoForm = Backbone.View.extend({
  template: JST["photos/photo_form"],

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
        that.model.set({ file: event.target.result });
    }
    reader.onerror = function(stuff) {
        console.log("error", stuff)
        console.log (stuff.getMessage())
    }
    reader.readAsDataURL(file);
  },

//  submit: function (event) {
//    event.preventDefault();
//    
//    var attrs = $(event.currentTarget).serializeJSON();
//    this.model.set(attrs);
//    PaperclipDemo.pirates.add(this.model, {
//        success: function (attribute) {
//            console.log("happy days!");
//        },
//    });
//    this.model.save(null, {
//        success: function () {
//            window.location.assign("/pirates");
//        },
//    });
//  },

  submit: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget.form).serializeJSON();
    attrs.photo.user_id = FriendsApp.user_id;
    this.collection.create( attrs.photo );
  }
});

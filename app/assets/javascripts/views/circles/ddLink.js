FriendsApp.Views.CircleDropdownShow = Backbone.View.extend({
  tagName: "li",

  template: JST["circles/ddLink"],

  events: {
    "click a": "unhide"
  },

  render: function() {
    var renderedContent = this.template({
      circle: this.model
    });

    this.$el.html(renderedContent);    
    return this;
  },

  unhide: function(event){
    event.preventDefault();
    this.model.set({display: ""});
    this.model.save();
  }

});

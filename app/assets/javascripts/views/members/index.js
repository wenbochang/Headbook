FriendsApp.Views.MembersIndex = Backbone.View.extend({
  template: JST["members/index"],

  events: {
  },

  initialize: function(options) {
    this.members = options.members;
  },

  render: function() {
    var view = this;
    var renderedContent = this.template()
    this.$el.html(renderedContent);

    //append each member
    this.members.each( function(member) {
      var showView = new FriendsApp.Views.MemberShow({
        model: member
      });
      view.$el.append(showView.render().$el);
    });
    return this;
  }

});


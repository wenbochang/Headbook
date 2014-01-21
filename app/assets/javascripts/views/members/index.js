FriendsApp.Views.MembersIndex = Backbone.View.extend({
  events: {
  },

  initialize: function(options) {
    this.members = options.members;
  },

  render: function() {
    var view = this;
    this.$el.html();

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


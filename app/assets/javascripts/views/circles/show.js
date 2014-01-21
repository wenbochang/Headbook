FriendsApp.Views.CircleShow = Backbone.View.extend({
  template: JST["circles/show"],

  events: {
    "click .circle-close": "destroy",
    "click .circle-minimize": "minimize",
  },

  render: function() {
    var view = this;
    var renderedContent = this.template({
      circle: this.model
    });
    this.$el.html(renderedContent);
    this.$el.addClass("col-xs-3");
    this.makeCircleContainer();
    this.renderMembers();
    return this;
  },

  makeCircleContainer: function() {
    this.circleContainer = this.$(".circle-members");
    this.circleContainer.attr("data-circle-id", this.model.id);
    this.circleContainer.sortable({
      connectWith: ".circle-members",
      dropOnEmpty: true,
      stop: this.updateMembership
    }).disableSelection();
  },

  renderMembers: function() {
    var view = this;
    //memberships just an array after filter, cannot use collection.each
    //loop to render individual members
    _.each(this.getMemberships(), function(member) {
      var memberShowView = new FriendsApp.Views.MemberShow({
        model: member
      });
      view.circleContainer.append(memberShowView.render().$el);
    });
  },

  getMemberships: function() {
    var view = this;
    return FriendsApp.memberships.filter( function(membership) {
      return membership.get("circle_id") === view.model.id
    });
  },

  updateMembership: function(event, ui) {
    var membershipID = ui.item.data("membership-id");
    var newCircleID = ui.item.parent().data("circle-id");
    var m = FriendsApp.memberships.get(membershipID);
    m.save({  circle_id: newCircleID });
  },

  minimize: function() {
    this.model.set({display: "false"});
    this.model.save();
  },

  destroy: function() {
    this.model.destroy();
  }

});

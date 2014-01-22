FriendsApp.Views.CircleShow = Backbone.View.extend({
  template: JST["circles/show"],

  events: {
    "click .circle-close": "destroy",
    "click .circle-minimize": "minimize",
  },

  initialize: function() {
    this.memberships = this.model.get("memberships");
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
      stop: this.updateMembership.bind(this)
    }).disableSelection();
  },

  renderMembers: function() {
    var view = this;
    this.memberships.each( function(membership) {
      var memberShowView = new FriendsApp.Views.MemberShow({
        model: membership
      });
      view.circleContainer.append(memberShowView.render().$el);
    })
  },

  updateMembership: function(event, ui) {
    if (!ui.item.parent().data("circle-id")) return;

    var membershipID = ui.item.data("membership-id");
    var newCircleID = ui.item.parent().data("circle-id");
//    var newIndex = ui.item.index();
    var membership = this.memberships.get(membershipID);
    membership.save({  circle_id: newCircleID });
  },

  minimize: function() {
    this.model.set({display: "false"});
    this.model.save();
  },

  destroy: function() {
    this.model.destroy();
  }

});

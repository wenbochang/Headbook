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
      start: this.startDrag.bind(this),
      stop: this.stopDrag.bind(this)
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

  startDrag: function(event, ui) {
    this.startCircle = ui.item.parents(".panel-info").data("circle-name");
  },

  stopDrag: function(event, ui) {
    this.endCircle = ui.item.parents(".panel-info").data("circle-name");

    var membershipID = ui.item.data("membership-id");
    var newCircleID = ui.item.parents().data("circle-id");
    var newIndex = ui.item.index();
    var newMembershipOrder = this.getNewOrder(ui);
    var membership = this.memberships.get(membershipID);

    if (membership && newCircleID) {
      membership.save({
        circle_id: newCircleID,
        list_index: newMembershipOrder,
      });
      this.checkAcceptRequest(ui, membership)
    }
  },

  checkAcceptRequest: function(ui, membership) {
    console.log("start circle: " + this.startCircle);
    console.log("end circle: " + this.endCircle);
    if (this.startCircle === "Strangers" && this.endCircle === "Friends"){
      $.ajax({
        url: "/accept",
        type: "POST",
        data: {
          new_friend_id: membership.get("user").id
        },
      });
    }
  },

  getNewOrder: function(ui) {
    var node = ui.item[0];
    if (!node.previousSibling && !node.nextSibling) {
      return 0; //empty
    } else if (!node.previousSibling) {
      return -1 + $(node.nextSibling).data("order"); //top most
    } else if (!node.nextSibling) {
      return 1 + $(node.previousSibling).data("order"); //bottom most
    } else {
      var prev = $(node.previousSibling).data("order");
      var next = $(node.nextSibling).data("order");
      return (prev + next) / 2;
    }
  },

  minimize: function() {
    this.model.set({display: "false"});
    this.model.save();
  },

  destroy: function() {
    this.model.destroy();
  }

});

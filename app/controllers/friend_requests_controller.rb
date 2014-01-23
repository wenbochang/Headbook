class FriendRequestsController < ApplicationController
  def create
    # a friend request puts the "from user" and "to user" in each other's stranger circles
    from_stranger_circle = current_user.circles.where(:circle_name => "Strangers").first
    Membership.create!(:circle_id => from_stranger_circle.id, :user_id => params[:asc_id])

    to_user = User.find(params[:asc_id])
    to_stranger_circle = to_user.circles.where(:circle_name => "Strangers").first
    Membership.create!(:circle_id => to_stranger_circle.id, :user_id => current_user.id)

    redirect_to add_friends_url
  end
end

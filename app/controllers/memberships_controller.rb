class MembershipsController < ApplicationController
  #new memberships are only created by friend requests
  def index
#    render :json => Membership
#      .select("memberships.*, username")
#      .joins(:user)
#      .joins(:circle)
#      .where("circles.user_id" => current_user.id)
    render :json => current_user.assoc_memberships
  end

  def update
    m = Membership.find(params[:id])
    m.update_attributes(params[:membership])
    head :ok
  end

  def accept
    new_friend_circle = User.find(params[:new_friend_id])
      .circles
      .where(:circle_name => "Friends")
      .first
    Membership.create!(
      :circle_id => new_friend_circle.id,
      :user_id => current_user.id
    )
    head :ok
  end
end

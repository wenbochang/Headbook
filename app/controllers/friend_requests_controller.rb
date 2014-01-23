class FriendRequestsController < ApplicationController
  def create
    # make membership row with from/to user_id
    # 1st get [to_user]'s strangers circle
    # 2nd put [from_user] into circle
    @to_user = User.find(params[:to_user_id])
    @friend_circle = @to_user.circles.where(:circle_name => "Strangers").first
    Membership.create!(
      :circle_id => @friend_circle.id, 
      :list_index => -1 * @friend_circle.memberships.length,
      :user_id => params[:from_user_id]
    )
    head :ok
  end
end

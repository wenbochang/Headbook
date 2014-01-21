class FriendRequestController < ApplicationController
  def create
    # make membership row with from/to user_id
    # 1st get [to_user]'s strangers circle
    # 2nd put [from_user] into circle
    @to_user = User.find(params[:to_user_id])
    @friend_circle = @to_user.circles.where(:circle_name => "Friends")
    Membership.create!(
      :circle_id => @friend_circle, 
      :user_id => params[:from_user_id]
    )
    head :ok
  end
end

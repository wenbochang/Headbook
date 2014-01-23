class MembershipsController < ApplicationController
  #new memberships are only created by friend requests
  def index
    render :json => Membership
      .select("memberships.*, username")
      .joins(:user)
      .joins(:circle)
      .where("circles.user_id" => current_user.id)
  end

  def create
    Membership.create!(params[:membership])
    head :ok
  end

  def update
    m = Membership.find(params[:id])
    m.update_attributes(params[:membership])
    head :ok
  end

  def accept
    #change accepted friend's membership, 
    #we go from their stranger circle to their friend circle
    stranger_circle = User.find(params[:new_friend_id]).circles
      .where(:circle_name => "Strangers").first
    friend_circle = User.find(params[:new_friend_id]).circles
      .where(:circle_name => "Friends").first
    
    Membership.find_by_user_id_and_circle_id(
      current_user.id,
      stranger_circle.id
    ).update_attributes(
      :circle_id => friend_circle.id
    )
    head :ok
  end
end

class MembershipsController < ApplicationController
  #new memberships are only created by friend requests

  def index
    render :json => Membership
      .select("memberships.*, username")
      .joins(:user)
      .joins(:circle)
      .where("circles.user_id" => current_user.id)
  end

  def update
    m = Membership.find(params[:id])
    m.update_attributes(params[:membership])
    head :ok
  end
end

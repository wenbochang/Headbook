class MembershipsController < ApplicationController
  def index
    render :json => Membership.select(
      "memberships.*, users.username AS username"
    ).joins(:user)
  end

  def update
    m = Membership.find(params[:id])
    m.update_attributes(params[:membership])
    head :ok
  end
end

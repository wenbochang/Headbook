class MembershipsController < ApplicationController
  def index
    render :json => Membership.all.to_json(:include => :user)
  end

  def update
    m = Membership.find(params[:id])
    m.update_attributes(params[:membership])
    head :ok
  end
end

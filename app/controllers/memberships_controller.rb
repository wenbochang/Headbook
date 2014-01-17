class MembershipsController < ApplicationController
  def index
    @members = Membership.joins(:user).select("*,users.username")
    render :json => @members
  end
end

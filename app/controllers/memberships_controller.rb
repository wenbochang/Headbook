class MembershipsController < ApplicationController
  def index
    render :json => current_user.memberships
  end
end

class MembershipsController < ApplicationController
  def index
    @members = Memberships.all
    render :json => @members
  end
end

class CirclesController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render :json => @user.circles
  end

  def new
  end

  def create
  end

end

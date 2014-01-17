class CirclesController < ApplicationController
  def index
    user = User.find(params[:user_id])
    circles = user.circles
    render :json => circles.to_json(:include => :members)
  end

  def new
  end

  def create
  end

  def destroy
  end

end

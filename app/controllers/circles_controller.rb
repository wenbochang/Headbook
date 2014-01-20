class CirclesController < ApplicationController
  def index
    user = User.find(params[:user_id])
    circles = user.circles
    render :json => circles.to_json(:include => :members)
  end

  def new
  end

  def create
    @circle = Circle.new(params[:circle])
    if @circle.save
      head :ok
    else
      render :json => @circle.errors.full_messages
    end
  end

  def destroy
    Circle.find(params[:id]).destroy
    head :ok
  end

end

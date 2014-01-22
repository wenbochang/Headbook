class CirclesController < ApplicationController
  def index
    render :json => current_user.circles
      .includes(:memberships => :user)
      .to_json(:include => {:memberships => {:include => :user}})
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

  def update
    @circle = Circle.find(params[:id])
    @circle.update_attributes(params[:circle])
    head :ok
  end

  def new
  end
end

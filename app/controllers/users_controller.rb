class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      redirect_to @user
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def show
    @user = current_user
  end
end

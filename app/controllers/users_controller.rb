class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      session[:session_token] = @user.session_token
      redirect_to @user
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def show
    @shared_posts = current_user.shared_posts
    @shared_photos = current_user.shared_photos
  end
end

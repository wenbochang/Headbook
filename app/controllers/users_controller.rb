class UsersController < ApplicationController
  before_filter :check_permission, :only => [:show]

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
    @user = User.find(params[:id])
    @shared_posts = @user.shared_posts
    @shared_photos = @user.shared_photos
  end

  def check_permission
    redirect_to new_session_url unless current_user
  end

  def index
    render :json => User.all
  end
end

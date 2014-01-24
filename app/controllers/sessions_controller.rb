class SessionsController < ApplicationController
  def new 
  end

  def destroy
    logout_current_user!
    redirect_to new_session_url
  end

  def create
    user = User.find_by_credentials(params[:user])

    if user
      session[:session_token] = user.reset_session_token!
      redirect_to user
    else
      flash.now[:errors] = "Wrong credentials"
      render :new
    end
  end
end

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
      self.current_user = user
      redirect_to user
    else
      flash.now[:errors] = "Wrong credentials"
    end
  end
end

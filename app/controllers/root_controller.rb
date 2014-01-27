class RootController < ApplicationController
  def root
    redirect_to new_session_url unless current_user
  end
end

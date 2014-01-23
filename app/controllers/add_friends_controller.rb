class AddFriendsController < ApplicationController
  def index
    @non_associates = User.all - [current_user] - current_user.associates
  end
end

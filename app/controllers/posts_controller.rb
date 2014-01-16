class PostsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    respond_to do |format|
#      format.html
      format.json { render :json => @user.posts }
    end
  end

  def create
    @post = Post.new(params[:post])
    @post.user_id = current_user.id
    @post.save
    head :ok
  end
end

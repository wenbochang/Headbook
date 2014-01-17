class PostsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render :json => @user.posts 
  end

  def create
    @post = Post.new(params[:post])
    @post.user_id = current_user.id
    @post.save
    head :ok
  end
end

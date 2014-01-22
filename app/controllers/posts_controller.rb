class PostsController < ApplicationController
  def index
    render :json => Post
      .select("posts.*, circle_name")
      .joins(:circle)
      .where(:user_id => params[:user_id])
  end

  def create
    @post = Post.new(params[:post])
    @post.user_id = current_user.id
    @post.save
    head :ok
  end
end

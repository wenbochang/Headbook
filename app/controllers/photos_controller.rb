class PhotosController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render :json => @user.photos
  end

  def create
    @photo = Photo.new(params[:photo])
    if @photo.save
      @photo.update_attributes(:url => @photo.file.url) if @photo.file_file_size
      head :ok
    else
      render :json => @photo.errors
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render :json => @photo.file.url
  end

end

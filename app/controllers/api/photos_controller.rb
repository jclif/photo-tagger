class Api::PhotosController < ApplicationController
  before_filter :require_current_user!

  def index
    @user = User.find_by_id(params[:user_id])

    if @user
      @photos = @user.photos
      render json: @photos
    else
      render text: "Couldn't find user."
    end
  end

  def show
    @photo = Photo.find_by_id(params[:id])

    if @photo
      render json: @photo
    else
      render text: "Couldn't find photo."
    end
  end

  def create
    @photo = Photo.new(params[:photo])
    @photo.user_id = current_user.id

    if @photo.save
      render json: @photo
    else
      render text: "Invalid photo."
    end
  end

end

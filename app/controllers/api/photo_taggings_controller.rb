class Api::PhotoTaggingsController < ApplicationController
  before_filter :user_owns_photo, only: [:create]
  # TODO test before_filter with a request

  def create
    @PT = PhotoTagging.new(params[:photo_tagging])

    if @PT.save
      render json: @PT
    else
      render text: "Invalid tagging."
    end
  end

  def index
    @photo = Photo.find_by_id(params[:photo_id])

    if @photo
      @PTs = @photo.photo_taggings
      render json: @PTs
    else
      render text: "Photo not found."
    end
  end

end

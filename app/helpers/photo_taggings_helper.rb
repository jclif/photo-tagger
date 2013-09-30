module PhotoTaggingsHelper

  def user_owns_photo
    photo = Photo.find_by_id(params[:photo_tagging][:photo_id])

    if photo && current_user.id != photo.user_id
      render text: "ERROR: current user doesn't own that photo"
    end
  end

end

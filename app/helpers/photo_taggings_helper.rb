module PhotoTaggingsHelper

  def user_owns_photo
    if Photo.find_by_id(params[:photo_tagging][:photo_id]).user_id != current_user.id
      render text: "ERROR: current user doesn't own that photo"
    end
  end

end

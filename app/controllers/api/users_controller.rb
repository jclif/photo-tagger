class Api::UsersController < ApplicationController
  before_filter :require_current_user!, :only => [:show]

  def show
    @user = User.find_by_id(params[:id])

    if @user
      render json: @user
    else
      render text: "User not found."
    end
  end

end

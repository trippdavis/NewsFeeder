class Api::FavoritesController < ApplicationController
  def create
    fav_type = params[:fav_type]

    classes = { "entry" => "Entry", "feed" => "Feed" }
    @favorite = Favorite.new(user_id: current_user.id, favorable_type: classes[fav_type], favorable_id: Integer(params[:favorable_id]))

    unless @favorite.save
      render json: @favorite.errors.full_messages, status: 422
    else
      render json: @favorite
    end
  end
end

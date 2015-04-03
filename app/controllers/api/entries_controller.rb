class Api::EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
  render :json => feed.entries

  # @feed_entries = feed.entries.includes(:favorites) -> pass to jbuilder
  # jbuilder json.array!(feed_entries, partial: :) -> true/false
  end

  private
  def entry_params
    params.
      require(:entry)
      .permit(:guid, :link, :published_at, :title, :json, :feed_id)
  end
end

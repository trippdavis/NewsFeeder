class Favorite < ActiveRecord::Base
  validates :user_id, :favorable_id, :favorable_type, presence: true

  belongs_to :favorable, polymorphic: true
  belongs_to :user
end

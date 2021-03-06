class Photo < ActiveRecord::Base
  attr_accessible :title, :url, :user_id

  validates :user_id, :url, :title, presence: true
  validates :url, :format => URI::regexp(%w(http https))

  belongs_to :user
  has_many :photo_taggings
  has_many :tagged_users, through: :photo_taggings, source: :user
end

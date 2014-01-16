class Photo < ActiveRecord::Base
  attr_accessible :title, :url, :circle_id, :user_id

  belongs_to :user
  belongs_to :circle
end

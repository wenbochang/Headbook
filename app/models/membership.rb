class Membership < ActiveRecord::Base
  attr_accessible :circle_id, :user_id

  validates :circle_id, :user_id, :presence => true

  belongs_to :circle
end

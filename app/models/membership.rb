class Membership < ActiveRecord::Base
  attr_accessible :circle_id, :user_id, :list_index

  validates :circle_id, :user_id, :presence => true

  belongs_to :circle
  belongs_to :user
end

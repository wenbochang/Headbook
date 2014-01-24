class Membership < ActiveRecord::Base
  attr_accessible :circle_id, :user_id, :list_index, :from_user

  validates :circle_id, :user_id, :presence => true
  validates_uniqueness_of :user_id, :scope => :circle_id

  belongs_to :circle
  belongs_to :user
end

class Circle < ActiveRecord::Base
  attr_accessible :circle_name, :user_id

  belongs_to :user
  has_many :memberships
end

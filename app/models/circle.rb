class Circle < ActiveRecord::Base
  attr_accessible :circle_name, :user_id

  belongs_to :user
  has_many :memberships
  has_many :posts
  has_many :photos

  has_many :members, :through => :memberships, :source => :user
end

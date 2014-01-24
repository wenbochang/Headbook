class Circle < ActiveRecord::Base
  attr_accessible :circle_name, :user_id, :display, :removable

  validates :circle_name, :user_id, :presence => true
  validates_uniqueness_of :circle_name, :scope => :user_id

  belongs_to :user
  has_many :posts
  has_many :photos
  has_many :memberships, :dependent => :destroy

  has_many :members, :through => :memberships, :source => :user

end

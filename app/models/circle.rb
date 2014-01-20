class Circle < ActiveRecord::Base
  attr_accessible :circle_name, :user_id, :display, :removable

  validates :circle_name, :user_id, :presence => true

#  after_initialize :set_default_display_removable

  belongs_to :user
  has_many :memberships
  has_many :posts
  has_many :photos

  has_many :members, :through => :memberships, :source => :user

  def set_default_display_removable
    self.display ||= true
    self.removable ||= true
  end
end

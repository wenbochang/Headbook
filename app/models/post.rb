class Post < ActiveRecord::Base
  attr_accessible :body, :circle_id, :user_id

  belongs_to :user
  belongs_to :circle
end

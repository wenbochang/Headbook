class User < ActiveRecord::Base
  extend FriendlyId
  friendly_id :username, :use => :slugged

  attr_accessible :password, :username, :email

  before_validation :ensure_session_token

  validates :password_digest, :username, :presence => true
  validates :username, :uniqueness => true

  before_create :make_md5_email

  after_create :create_default_circles

  has_many :circles
  has_many :memberships
  has_many :posts
  has_many :photos

  has_many :associates, :through => :circles, :source => :members
  has_many :in_circles, :through => :memberships, :source => :circle
  has_many :shared_posts, :through => :in_circles, :source => :posts
  has_many :shared_photos, :through => :in_circles, :source => :photos

  def self.find_by_credentials(params)
    u = User.find_by_username(params[:username])
    return u if u && u.is_password?(params[:password])
  end

  def create_default_circles
    Circle.create!(:circle_name => "Friends", :user_id => self.id,
                   :removable => "false")
    Circle.create!(:circle_name => "Strangers", :user_id => self.id,
                   :removable => "false")
    Circle.create!(:circle_name => "Private", :user_id => self.id,
                   :removable => "false", :display => "false")
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    return self.session_token
  end

  private
  def make_md5_email
    return unless self.email
    self.email_md5 ||= Digest::MD5.hexdigest(self.email.downcase)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end
end

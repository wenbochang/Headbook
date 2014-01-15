class User < ActiveRecord::Base
  attr_accessible :password, :username

  validates :password_digest, :username, :presence => true

  after_initialize :ensure_session_token

  has_many :circles
  has_many :associates, :through => :circles, :source => :memberships


  def self.find_by_credentials(params)
    u = User.find_by_username(params[:username])

    if u && u.is_password?(params[:password])
      return u
    end

    nil
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

  def ensure_session_token
    self.session_token ||= self.reset_session_token!
  end
end

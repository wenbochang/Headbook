class Photo < ActiveRecord::Base
  attr_accessible :title, :url, :circle_id, :user_id, :file_data

  belongs_to :user
  belongs_to :circle

  has_attached_file :file, :styles => {
    :big => "600x600>",
    :small => "50x50#"
  }

  def file_data=(data_value)
    p '-' * 100
    start_idx = data_value.index(',') + 1
    data_value = data_value[start_idx..-1]
    p data_value
    StringIO.open(Base64.strict_decode64(data_value)) do |data|
      data.class.class_eval { attr_accessor :original_filename, :content_type }
      data.original_filename = "temp#{DateTime.now.to_i}.png"
      data.content_type = "image/png" #TODO: get content type from file
      self.file = data
    end
  end
end

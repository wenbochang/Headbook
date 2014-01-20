class ChangeUrlFormatInPhoto < ActiveRecord::Migration
  def up
    change_column :photos, :url, :text
  end

  def down
    change_column :photos, :url, :string
  end
end

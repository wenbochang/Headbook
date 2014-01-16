class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.string :url
      t.integer :circle_id
      t.integer :user_id

      t.timestamps
    end
  end
end

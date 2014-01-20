class AddDisplayToCircles < ActiveRecord::Migration
  def change
    add_column :circles, :display, :boolean
  end
end

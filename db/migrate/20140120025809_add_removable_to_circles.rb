class AddRemovableToCircles < ActiveRecord::Migration
  def change
    add_column :circles, :removable, :boolean
  end
end

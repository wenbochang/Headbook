class AddListIndexToMemberships < ActiveRecord::Migration
  def change
    add_column :memberships, :list_index, :real
  end
end

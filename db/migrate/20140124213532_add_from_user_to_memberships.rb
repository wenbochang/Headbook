class AddFromUserToMemberships < ActiveRecord::Migration
  def change
    add_column :memberships, :from_user, :boolean
  end
end

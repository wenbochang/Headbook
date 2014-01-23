class AddEmailToUsers < ActiveRecord::Migration
  def change
    add_column :users, :email, :string
    add_column :users, :email_md5, :string
  end
end

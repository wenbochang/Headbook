# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(:username => "user1", :password => "asd")
User.create!(:username => "user2", :password => "asd")
Circle.create!(:circle_name => "friends", :user_id => 1)

#add user 2 to user 1's friends circle
Membership.create!(:circle_id => 1, :user_id => 2)

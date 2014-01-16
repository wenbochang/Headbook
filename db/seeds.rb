# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(:username => "user1", :password => "asd")
User.create!(:username => "user2", :password => "asd")
User.create!(:username => "user3", :password => "asd")

#ad 2 circles for user1, 1 for friend and 1 for stranger
Circle.create!(:circle_name => "friends", :user_id => 1)
Circle.create!(:circle_name => "strangers", :user_id => 1)

#add user 2 to user 1's friends circle
Membership.create!(:circle_id => 1, :user_id => 2)
Membership.create!(:circle_id => 2, :user_id => 3)

#posts
Post.create!(:body => "post1 by user1, shared with circle1", 
             :circle_id => 1, :user_id => 1)

#Photos
Photo.create!(:title => "photo1 by user1, shared w/ circle2", 
              :url => "http://placekitten.com/200/300",
              :circle_id => 2, :user_id => 1)


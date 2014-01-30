# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
User.create!(:username => "anthony", :email => "ajnassar@gmail.com", :password => "asd")
User.create!(:username => "wenbo", :email => "enquea@gmail.com", :password => "asd")
User.create!(:username => "eric", :email => "e.s.robinson@gmail.com", :password => "asd")
User.create!(:username => "sol", :email => "solomon.garger@gmail.com", :password => "asd")

#add user 2 to user 1's friends circle
Membership.create!(:circle_id => 1, :user_id => 2, :list_index => 0)
Membership.create!(:circle_id => 4, :user_id => 1, :list_index => 0)

Post.create!(:body => "Hi Wenbo!", 
             :circle_id => 1, :user_id => 1)

#Photos
Photo.create!(:title => "I love cats!", 
              :url => "http://placekitten.com/200/300",
              :circle_id => 1, :user_id => 1)


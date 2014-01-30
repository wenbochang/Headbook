This is a Facebook clone written with a Ruby on Rails backend and a 
Backbone frontend.
  
A user may have associates that he/she places in different circles. Posts and
pictures may be shared with any or all circles.
  
There is a Backbone collection for all circles, posts and photos. This
mirrors the Rails models which allows for associations between them. Thus
a user has many circles, and belong to circles through memberships. This allows 
memberships to connect users to one another.
  
jQueryUI is utilized to allow the drag-and-drop of a user's associates from
one circle to the next. Ajax queries are automatically called to update their
memberships.
  
Photo uploading is done with Paperclip, which stores the files on an AWS E3
server for future use.

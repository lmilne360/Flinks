# README


## About

This project, RPL, was written and designed using the Rails 5 framework and bootstrap 4. 

Users are able to view links posted by themselves and other users

Users are required to be logged  in order to perform additional task;
  * User can create a new account on the signup page or be authenticated via facebook
  * If account was manually creater, user can edit account details by clicking on `Edit Account`

Users are then able to comment and/or vote on a submitted link.

Upon creating a link, a user is able to add tags to said link

Users are also able to follow the url of a link, edit or delete links owned by themselves.

This project contains a search feature which enable users to filter links based on an inputed tag. If no such tag is found, all links will be displayed.

## Installation
Make sure to run bundle update before running.

 ` bundle install`
 
 Migrate the database
 
 `rake db:migrate`
 
 Start the rails server
 
 `rails s`
  

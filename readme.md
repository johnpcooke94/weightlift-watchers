# Weightlift Watcher

## Overview

Weightlift Watcher is a web application to help weight lifters track their workout routines. It allows users to store 
exercises, see descriptions and form videos for common exercises, and track their current progress. The web app will store
the user's current weight progress alongside the number of sets and reps that the user is doing at that weight level.

## Server-side

The server-side application will be an Express server running on node.js. It will utilize MongoDB on the data layer, with
Mongoose as an ORM.

The server will need to store information about different users, so that users can track their progress separate from other 
users. It will also need to authenticate users, and allow them to add new exercises to their list, with user inputs for 
descriptions, weight level, and sets/reps. 

To that end, the API will have the following endpoints:

* /api/v1/user - POST to this top-level endpoint to register a new user
  * /{user-id} - Retrieve a registered user by ID
  * /{username} - Retrieve a registered user by username
  * /login - Log in an already-existing user
  * /exercises - Retrieve a list of exercises that the user has stored
* /api/v1/exercise - A POST request to this endpoint will create a new exercise
  * /{exercise-id} - Retrieve information about a specified exercise


## Client-side

The client-side will be a web application written in ~~Angular~~ React. It will feature the following views:

* Exercise List - A list of exercises for a logged-in user displaying useful information about the exercises
* Exercise Creation - A page for users to create a new exercise to be stored on the server and displayed on the Exercise 
List page
* Login - A simple authentication page prompting for username and password
* Registration - A simple user registration page

## Misc

The frontend and backend for this project will each have a separate directory in the root of this project. The respective 
directories will each contain a readme detailing important information about how to set up and build the respective application
for both development and deployment in production.
### This repo is used as an assessment during the course of the Turing modules, if you are viewing this repository outside the context of an assessment, you’re in violation of the Academic Integrity policy you agreed to as a student.

## Turing Cafe - Reservation Portal

This application was built with `create-react-app`.

### Set Up

Fork and clone down the repo.

<!-- On GitHub, create a new, empty repository and name it something like 'turing-cafe-fe'.

By the end of the assessment, update the current remote (origin) and point it at the new URL of the repository you just created on GitHub. You can read how to do this [here](https://help.github.com/en/articles/changing-a-remotes-url). Once you've updated the remote, you should be able to push up to that repo after you have at least one commit.
 -->
`cd` into the repo you cloned down. 
 
Run `npm install` to install dependencies for the repo.

Run `npm start` to start up your React server.

Run `npm run cypress` to start up the Cypress testing server.

### Expectations / Rules

Build a React App that displays the current reservations for the Turing Cafe!

You will have 3 hours to build this application.

![turing-cafe-screenshot](https://user-images.githubusercontent.com/20754511/57332366-dbd59d00-70d7-11e9-9de6-967d7aca98a4.png)

We do want to see good commit habits - atomic commits that log small, focused changesets. Don't worry about creating GitHub issues, though.

### Iteration 0

Pull down the [API repo](https://github.com/turingschool-examples/turing-cafe-api). Set up instructions are in that repository's README.

Do *not* nest this inside your front-end repository.

### Iteration 1

Get all existing reservations on page load and display them on the DOM.

### Iteration 2

Create a controlled form component to create a reservation (look into the API documentation to see what pieces of information are expected, and what datatypes it wants each piece to be). As a user types into the input fields, the form component's state should change.  When the user clicks the `Make Reservation` button, the application should update the App's state.  The new reservation should display with all of the existing reservations. 

Do not worry about making the POST request to the database yet.

### Iteration 3

Now that the functionality is there for adding a reservation, write some tests:

**Be sure to intercept and stub any userflows that rely on data from the API**
* Write tests covering what should be displayed on the page when the user first visits.
* Write a test that checks that when data is put into the form, the value is reflected in that form input.
* Write a test to check the user flow of adding a new reservation to the page.

### Iteration 4 (extension - this _will_ be an expectation for the final assessment)

When the user makes a reservation, the application should make a POST request to the API. The new reservation should still exist upon reloading the page.

**Keep any fetch calls you write in the App component for now**

(If you have time to refactor your fetch calls into a separate helper file, that is fine, but it is *NOT* a requirement for this application.)

### Iteration 5 (extension)

Delete a reservation when the user clicks the `Cancel` button.  The deletion should persist upon reloading the page.

### Other Extensions

* Add error handling for the form and network requests. Try writing out a few other tests to cover sad path testing.

* Add a new endpoint to the API server so the front-end can request all of the cafe's menu items. In the front end, add a button to view the menu.

* Add a button or drop down so that the user has the option to sort their reservations by date from earliest to latest or latest to earliest.

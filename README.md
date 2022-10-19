# Instructions to run the program:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

simply download the files and run command 'npm install', it will install all the required dependencies as all the information of depencdencies is stored in package.json file

I have used following external packages or libraries in this project:

1. react-bootstrap
2. react-calendar
3. react-icons

# My working process:

Simply started by created project with create-react-app and completed the project in the following flow:

1. I thought about the design idea first like where to show modals and dropdowns etc,
2. I decided not to setup context or redux as the project was quite small and components were the parent or child component of each other thus, data easily passed thorugh props and app wide state management was not required.
3. After designing basic structure of program, I used Firebase realtime database for fetching and storing scheduled calls.
4. After completing the project, I just did the manual testing.

# Required API endpoints:

1. /getmentordata:
   This API end point will provide the required data of mentors e.g: names and experties

2. /signin
   This API end point will get the user inputs from front end login form and after necessory authentication, it will provide the profile data of user if authenticated or error if authentication fails

3. /signup
   This API end point will be used to create a new user account, it will get required user information from front end signup form and create the account of user in the database after completing necessory authentication.

4) /getschedulecalls
   This API end point will get the mentor Id and date from the front end and will provide the scheduled calls information through fetching data from database.

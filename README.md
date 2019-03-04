This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all the dependencies of project

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## In this repo

It's a Simple "TODO" web application using React + Redux. 

### Features:

1. Page 1 : Display list of Tasks in the UI
2. Page 1 : User should allow to add task to list
3. Page 1 : User should allow to delete task from list
4. Page 2 : Create a detail page to display selected task (Display id, name, creation date, and nickname)
5. Page 2 : User should allow to modify/update the task's nickname. (When user navigate back to Page 1, user should see the change.)

Data structure:
let task = {
	id: "1",
	name: "Submit assignemnt",
	creationTime: "2019-01-23",
	nickname: {
		data:{
			name: "React assignment"
		}
	}
}

NOTE: Page 2 should retrieve data from Redux store. ( Passing "task" data via Session Storage or URL parameters is not allowed. However, you can pass task's id in the url, such as localhost:3000/page2?id=1 )
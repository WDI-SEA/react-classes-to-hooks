## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Classes to Hooks Lab
-----
## 🥅 Objective
This app currently renders basic input and list components for a todo list application. 

The app project tell us the following: 
*  👾 There is a bug preventing us from moving further - right now our app can receive an input, but does not correctly append input to our list component.
*  ❌ App should allow for user to delete items from list on click. 
*  👻 App is currently written using class based components, but needs to be updated to functional components so that it can use modern React APIs!

Using what we have learnd about React data flow, state, component lifecycle, hooks, and prop drilling update the app completing the missing project tasks above. 

Completed lab application should render a to do list that the user can add items to, and delete on click from our list. This application should be written using hooks and functional based components, update from our current class based component organization. 

## 🎣 Classes vs. Hooks
All components in our app are currently written using a class based decleration (example: `class Todolist extends Component`). 

Since 2019 React has encouraged developers to move towards a new declerative format for component definitions. 

This development methodology allows for functional componets, as opposed to our perviously used class based components. 

For more on functional components/React Hooks, and the new associated React APIs, see our lesson here: [Gitbook notes on react hooks](https://gawdiseattle.gitbook.io/wdi/16-react/01-hooks-intro).

## 🚶‍♀️ Steps to Achieve
Our app is currently organized into components, defined in three seperate files: `Input.js`, `Tasks.js`, and a parent container component in `Todolist.js`.

To complete our lab, follow these instructions:

**First** - think about how you would like to refractor our app's existing code to move from a class based component decleration for each component to a functional component/hook based action for our app. 

**Second** - once updated to functional based components add in the functionality to:
    - add an item from input to our task list. 
    - on click, delete an item from our task list. 

## 📦 Deliverable
See checklist of features final app should include below. 

*Our final app will:*
1.  Render a lightly styled todo list to the user
2.  Allow user to input tasks. Tasks are rendered in list format. 
3.  If user completes a task they can click to delete it form their list. 
4.  App is written using modern React methods/APIs so that we can scale app in the future!


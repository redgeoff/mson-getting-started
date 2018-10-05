# mson-getting-started
[![Circle CI](https://circleci.com/gh/redgeoff/mson-getting-started.svg?style=svg&circle-token=5218503cb99b212557c16889c410659540930b90)](https://circleci.com/gh/redgeoff/mson-getting-started)

This is a sample app that will get you started with [MSON](https://github.com/redgeoff/mson). You can think of it as a "Hello World" type app that displays a simple list of contacts that can be edited, filtered and sorted.

## Running the app

 - $ git clone https://github.com/redgeoff/mson-getting-started
 - $ cd mson-getting-started
 - $ yarn install
 - $ yarn start
 - Visit http://localhost:3000 in a web browser

The app logic resides in [components.js](src/components.js). Look at what you get with just a few lines of MSON!

## Making it Real Time

If you are feeling adventurous, you can make the app real-time capable by using Firebase. Simply sign up for a free account at [firebase.google.com](https://firebase.google.com/) and then modify the store in [components.js](src/components.js) so that it has your details:
```js
store: {
  component: 'FirebaseStore',
  apiKey: 'YOUR-API-KEY',
  authDomain: 'YOUR-SUBDOMAIN.firebaseapp.com',
  projectId: 'YOUR-PROJCT-ID',
  collection: 'contacts'
}
```

After configuring the FirebaseStore, you'll be able to edit your contacts in one browser window and see them update in real time in another browser window.

## create-react-app

Note: mson-getting-started uses [create-react-app](https://github.com/facebook/create-react-app) with very few changes.

# mson-getting-started

This is a sample app that will get you started with MSON. You can think of it as a "Hello World" type app that displays a simple list of contacts that can be edited, filtered and sorted.

# Running the app

    $ git clone https://github.com/redgeoff/smon
    $ yarn install
    $ yarn start
    Visit http://localhost:3000 in a web browser

The app logic resides in [components.js](src/components.js). Look at what you get with just a few lines of MSON!

# Making it Real Time

If you are feeling adventerous, you can make the app real-time capable by using Firebase. Simply signup for a free account at [firebase.google.com](https://firebase.google.com/) and then modify the store in [components.js](src/components.js) so that it has your details:
```js
store: {
  component: 'FirebaseStore',
  apiKey: 'YOUR-API-KEY',
  authDomain: 'YOUR-SUBDOMAIN.firebaseapp.com',
  projectId: 'YOUR-PROJCT-ID',
  collection: 'contacts'
}
```

# create-react-app

Note: mson-getting-started uses [create-react-app](https://github.com/facebook/create-react-app) with very few changes.
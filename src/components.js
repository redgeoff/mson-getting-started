// A contact component that captures the user's first name, last name and email address
export const contact = {
  name: 'app.Contact',
  component: 'Form',
  fields: [
    {
      name: 'firstName',
      component: 'TextField',
      label: 'First Name',
      required: true,

      // When block is false, the next field will appear on the same line, i.e. the first name and
      // last name will be on the same line
      block: false
    },
    {
      name: 'lastName',
      component: 'TextField',
      label: 'Last Name'
    },
    {
      name: 'email',
      component: 'EmailField',
      label: 'Email'
    }
  ]
};

// Uses a RecordList to display a list of contacts
export const contacts = {
  name: 'app.Contacts',
  component: 'RecordList',
  label: 'Contacts',
  
  baseFormFactory: {
    // This factory creates Contacts
    component: 'Factory',
    product: {
      component: 'app.Contact'
    }
  },

  // We will use local storage to persist the data. This could be easily swapped out to use Firebase
  // or some other store. Or, you could create your own custom store to interact with a GraphQL/REST
  // API.
  store: {
    component: 'LocalStorageStore'
  }
};

// The main app component and the menu option
export const app = {
  name: 'app.App',
  component: 'App',
  menu: {
    component: 'Menu',
    items: [
      {
        // The route to the list of contacts
        path: '/contacts',
        label: 'Contacts',
        content: {
          component: 'app.Contacts'
        }
      }
    ]
  }
};

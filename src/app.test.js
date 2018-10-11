import React from 'react';
import ReactDOM from 'react-dom';
import app from './mson-app';
import AppContainer from 'mson-react/lib/app-container';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer component={app} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

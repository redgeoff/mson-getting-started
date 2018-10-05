import React from 'react';
import ReactDOM from 'react-dom';
import app from './mson-app';
import AppContainer from 'mson/lib/mson-react/app-container';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer app={app} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

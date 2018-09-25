// This file is just boilerplate used to register the MSON components and then instantiate the app

import compiler from 'mson/lib/mson/compiler';
import * as components from './components';
import _ from 'lodash';
import Component from 'mson/lib/mson/component';

// Make sure we only process front-end actions
Component.setLayer('frontEnd');

// Register all the components
_.forEach(components, component =>
  compiler.registerComponent(component.name, component)
);

// Intantiate the app
const app = compiler.newComponent({
  component: 'app.App'
});

export default app;

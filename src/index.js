// Note: babel-polyfill is needed by client for compilation
import 'babel-polyfill';

import mson from 'mson/lib/mson-react';
import app from './mson-app';

// Render the app using React
mson.render(app);

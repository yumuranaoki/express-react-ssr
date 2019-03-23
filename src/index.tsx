import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/index';

ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
)
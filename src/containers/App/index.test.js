import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';
import { BrowserRouter as Router }    from 'react-router-dom';
import {shallow} from 'enzyme';
const app= shallow(
    <Router>
        <App />
    </Router>);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(app, div);
});

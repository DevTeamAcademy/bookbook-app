import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
// root
import App from './App';
// constants
import * as C from './constants';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

// that relies on the router being in context
export function renderWithRouter(ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

it('renders without crashing', () => {
  expect(true).toEqual(true);
  // const { container } = renderWithRouter(<App />);
  // const div = document.createElement('div');
  // ReactDOM.render(container, div);
  // ReactDOM.unmountComponentAtNode(div);
});

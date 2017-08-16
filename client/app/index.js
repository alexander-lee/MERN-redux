import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import PostList from 'post/scenes/PostList';
import PostInformation from 'post/scenes/PostInformation';
import App from './components/App';

import { store, history } from './createStore';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PostList} />
        <Route path="post/:id" component={PostInformation} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

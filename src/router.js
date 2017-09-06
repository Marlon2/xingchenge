import React from 'react';
import { IndexRoute, Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import App from './routes/App';
import About from './routes/About';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={IndexPage} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
}

export default RouterConfig;

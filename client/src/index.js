import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './containers/App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedArticles from './containers/SavedArticles';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" exact component={App} />
        <Route exact path="/savedArticles" exact component={SavedArticles} />
      </Switch>
    </div>
  </Router>, document.getElementById('root'));


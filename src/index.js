import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Views/Home';
import Repo from './Views/Repo';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/repo">Repo</Link>
        </li>
      </ul>
    </nav>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/repo/" component={Repo}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

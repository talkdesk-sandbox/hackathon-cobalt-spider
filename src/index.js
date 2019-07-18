import React from 'react';
import ReactDOM from 'react-dom';
import CobaltRoot, { Button } from 'cobalt-react-components';
import Home from './Views/Home';
import Repo from './Views/Repo';
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <CobaltRoot>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/repo">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/repo/" component={Repo}/>
        <Button primary onClick={() => {}}>Yeye</Button>
      </div>
    </BrowserRouter>
  </CobaltRoot>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

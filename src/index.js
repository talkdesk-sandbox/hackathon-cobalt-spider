import React from 'react';
import ReactDOM from 'react-dom';
import CobaltRoot from 'cobalt-react-components';
import Home from './Views/Home';
import ProjectComponents from './Views/ProjectComponents';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { fetchVersion } from './api/index';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
    
fetchVersion().then(({ cobaltReactLatestVersion }) => {
  window.COBALT_VERSION = cobaltReactLatestVersion;

  ReactDOM.render(
    <CobaltRoot>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/project-components/:id" component={ProjectComponents}/>
      </BrowserRouter>
    </CobaltRoot>,
    document.getElementById('root')
  );
})
    
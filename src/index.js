import React from 'react';
import ReactDOM from 'react-dom';
import CobaltRoot from 'cobalt-react-components';
import Home from './Views/Home';
import ProjectComponents from './Views/ProjectComponents';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { components, fetchFile, fetchVersion, projects } from './api/index';

ReactDOM.render(
  <CobaltRoot>
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/project-components/" component={ProjectComponents}/>
    </BrowserRouter>
  </CobaltRoot>,
  document.getElementById('root')
);
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
    
fetchVersion().then(({ cobaltReactLatestVersion }) => {
  console.log('CURRENT COBALT VERSION:', cobaltReactLatestVersion);
})

projects.map(({ packageLink }) => {
  fetchFile('package.json', packageLink.split('/')[4])
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    let content = window.atob(res.content);
            
    let proj = JSON.parse(content);
    let version = proj.devDependencies['cobalt-react-components']
      || proj.dependencies['cobalt-react-components'];

    console.log(proj.name, '--->', version.substr(version.indexOf('#v') + 2));
  })
})
    
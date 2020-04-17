import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AtlasSdk from '@atlas/sdk';
import TokenGenerator from './config/token.generator'
import configI18n from './config/i18n'

async function onLaunch() {
  await configI18n();
}

async function init() {
  const atlas = await AtlasSdk.init({
    lifecycle: {
      onLaunch
    }
  });

  TokenGenerator.initialize(atlas.authorization.getAccessToken);

  renderApp();
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

init();


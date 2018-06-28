import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

// models
import DataModel from './models/DataModel';
// views
import TestView from './views/TestView';
// controllers
import DataUpdateController from './controllers/DataUpdateController'
import RandomDataController from './controllers/RandomDataController';

import ListView from './components/ListView/';

import App from './App'; // singleton application state holder

let reactDiv = document.getElementById("reactDiv");
let normalDivID = "#vanillaDiv";

init();

// initialize application
function init() {
  App.models = App.models || {};
  App.views = App.views || {};
  App.controllers = App.controllers || {};

  App.models.Data = new DataModel();

  // normal view
  // Use a selector to reference the element for normal JS
  App.views.Test = new TestView("#vanillaDiv");
  
  // react view
  // Mount React components or app sections to a specific element
  // this is done in the data update
  // ReactDOM.render(<ListView items={[]}/>, reactDiv);

  App.controllers.DataUpdate = new DataUpdateController();
  App.controllers.RandomData = new RandomDataController(1000, 15);

  App.controllers.RandomData.start();
}

registerServiceWorker();

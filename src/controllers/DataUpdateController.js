"use strict";

import React, { Component } from 'react';
import ReactDOM from "react-dom";

import ListView from '../components/ListView/';

import App from "../App";

let DataUpdateController = (function() {
  return function() {
    let self = {

    };

    function dataUpdated(newData) {
      App.views.Test.draw(newData);

      ReactDOM.render(<ListView items={newData} />, document.getElementById("reactDiv"));
    }

    return {
      dataUpdated
    };
  };
})();

export default DataUpdateController;

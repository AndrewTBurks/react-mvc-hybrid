"use strict";

import App from '../App';

let RandomDataController = (function() {
  return function(delay, length) {
    let self = {
      interval: null
    };
    
    function start() {
      self.interval = setInterval(function() {

        let newData = [];

        for (let i = 0; i < length; i++) {
          newData.push(Math.round(Math.random() * 100));
        }

        App.models.Data.updateData(newData);
      }, delay);
    }

    function stop() {
      clearInterval(self.interval);

      self.interval = null;
    }

    function toggle() {
      if (self.interval) {
        stop();
      } else {
        start();
      }
    }

    return {
      start,
      stop,
      toggle
    }
  }
}());

export default RandomDataController;
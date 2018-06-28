import App from '../App';

"use strict";

let DataModel = (function() {
  return function() {
    let self = {
      data: null
    };

    function updateData(newData) {
      self.data = newData;

      App.controllers.DataUpdate.dataUpdated(newData);
    }

    return {
      updateData
    };
  };
})();

export default DataModel;

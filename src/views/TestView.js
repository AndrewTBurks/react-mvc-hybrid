import * as d3 from 'd3';

let TestView = (function() {
  return function(id) {
    let self = {
      component: d3.select(id)
    };

    function draw(data) {
      self.component
        .html(data.join("\n"))
    }

    return {
      draw
    };
  }
}());

export default TestView;
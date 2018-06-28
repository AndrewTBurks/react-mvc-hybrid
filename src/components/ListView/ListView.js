import React, { Component, Fragment } from 'react';
import ListItem from './ListItem';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div style={{
        background: "white",
        borderRadius: "10px",
        width: "50%",
        display: "inline-block"
      }}>
        {
          this.props.items.map(i => (
            <ListItem text={i}/>
          ))
        }
      </div>
    )
  }
}
 
export default ListView;
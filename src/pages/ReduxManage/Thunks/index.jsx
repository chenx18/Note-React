import React, { Component } from 'react';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/12.Redux-thunk.md'


class ReactRedux extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() { 
    return ( 
      <div className="content demo flexContainer">
        <div className="demo_lt">
          <h4 className="title">Redux-thunk</h4>
        </div>
        <div className="demo_rt">
          <MarkComponents markPath={md} />
        </div>
      </div>
     );
  }
}
 
export default ReactRedux;

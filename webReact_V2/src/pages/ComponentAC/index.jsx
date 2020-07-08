import React, { Component } from 'react';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/08.组件通信.md'

import Comment from '@/components/Comment'

class ComponentAC extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="content demo flexContainer">
      <div className="demo_lt">
        <Comment />
        
      </div>
      <div className="demo_rt">
        <MarkComponents markPath={md} />
      </div>
    </div>
    );
  }
}
 
export default ComponentAC;
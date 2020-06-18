import React, { Component } from 'react';
import MusicListUI from './musicListUI';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/11.React-redux.md'


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
          <h4 className="title">音乐榜</h4>
          <MusicListUI />
        </div>
        <div className="demo_rt">
          <MarkComponents markPath={md} />
        </div>
      </div>
     );
  }
}
 
export default ReactRedux;

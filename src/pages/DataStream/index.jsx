import React, { Component } from 'react';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/04.双向数据.md'

class DataStream extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="content">
        <MarkComponents markPath={md} />
      </div>
    );
  }
}
 
export default DataStream;
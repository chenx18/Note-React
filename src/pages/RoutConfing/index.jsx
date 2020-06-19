import React, { Component } from 'react';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/09.路由配置.md'

class RoutConfing extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="content">
        <MarkComponents markPath={md} />
      </div>
    );
  }
}
 
export default RoutConfing;
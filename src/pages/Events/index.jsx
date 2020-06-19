import React, { Component } from 'react';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/03.事件对象.md'

class Events extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="content">
        <MarkComponents markPath={md} />
      </div>
    );
  }
}
 
export default Events;
import React, { Component } from 'react';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/02.基本语法.md'

class Base extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="content">
        <MarkComponents markPath={md} />
      </div>
    );
  }
}
 
export default Base;
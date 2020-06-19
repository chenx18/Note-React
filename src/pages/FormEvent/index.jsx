import React, { Component } from 'react';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/05.表单处理.md'

class FormEvent extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="content">
        <MarkComponents markPath={md} />
      </div>
    );
  }
}
 
export default FormEvent;
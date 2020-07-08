import React, { Component } from 'react';
import TodoList from '@/components/TodoList'
import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/07.生命周期.md'

class LifeCycle extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="content demo flexContainer">
        <TodoList />
        <div className="demo_rt">
          <MarkComponents markPath={md} />
        </div>
      </div>
    );
  }
}
 
export default LifeCycle;
import React, { Component } from 'react';
import MarkApp from '@/components/markComponents'
import md from '@/assets/notes/01.环境搭建.md'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div className="content">
        <MarkApp markPath={md} />
      </div>
    )
  }
}

export default Home;

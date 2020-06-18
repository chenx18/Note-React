import React, { Component } from 'react';

import MarkComponents from '@/components/markComponents'
import md from '@/assets/notes/10.Reudx.md'

import BookList from './bookList';
import './index.scss';


class Books extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  
  }


  
  render() { 
    return ( 
      <div className="content demo flexContainer">
        <BookList />
        <div className="demo_rt">
          <MarkComponents markPath={md} />
        </div>
      </div>
     );
  }
}
 
export default Books;
import React, { Component } from 'react';
import { Progress } from 'antd';
import BookInput from './bookInput';

import store from '@/store'
import { deleteItemAction } from '@/store/actions/actionCreatores'



class BookList extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...store.getState()
    }
    store.subscribe(this.storeChange)   //订阅Redux的状态
  }

  // 监听 store 变化
  storeChange = () => {
    const {bookList} = store.getState()
    this.setState({
      bookList
    })
  }

  // 渲染书单列表
  renderList = () => {
    const { bookList } = this.state;
    return (
      <ul className="book-list">
       { bookList.map((item,i) => {
          return (
            <li className="item" key={i}>
              <div className="title_box">
                <span>《{item.name}》</span>
                <span onClick={() => this.delItem(i)}>删除</span>
              </div>
              <Progress size="small" percent={item.speed} />
            </li>
          )
        })}
      </ul>
    )
  }

  // 删除书单
  delItem = (index) => {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }


  
  render() { 
    return ( 
      <div className="demo_lt">
        <h4 className="title">书单</h4>
        <BookInput />
        {this.renderList()}
      </div>
     );
  }
}
 
export default BookList;
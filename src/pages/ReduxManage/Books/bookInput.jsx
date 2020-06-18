import React, { Component } from 'react';
import { Input,Button } from 'antd';

import store from '@/store'
import { addItemAction } from '@/store/actions/bookAction'

import './index.scss';

class BookInput extends Component {
  constructor(props){
    super(props)
    console.log('store.getState', store.getState())
    this.state = {
      inputValue:'',
    }
  }

  render() { 
    const {inputValue} = this.state
    return ( 
      <div>
        <Input size="small" placeholder="Basic usage" 
          style={{width: '80%',marginRight: '5px'}} 
          value={inputValue} onChange={this.inputChange}/> 
        <Button size="small" type="primary" onClick={this.addList}>添加</Button>
      </div>
     );
  }

  // 添加书单
  addList =()=>{
    const {inputValue} = this.state;
    if(inputValue) {
      // 取1-100的随机数 
      let num = Math.floor(Math.random()*(1 - 100) + 100)
      let obj = {name: inputValue, speed: num}
      this.setState({inputValue: '' })

      // 创建action，通过dispatch()方法传递给store
      const action = addItemAction({name: inputValue, speed: num})
      store.dispatch(action)
      
    }
  }
  
  // 监听输入
  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
}
 
export default BookInput;

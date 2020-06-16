import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.scss'

class CommentApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments:[]
    }
  }
  handleSubmit = (e) => {
    if(!e) return;
    if(!e.userName) return alert ('请输入用户名')
    if(!e.contents) return alert ('请输入评论内容')
    let { comments } = this.state;
    comments.push(e)
    this.setState({
      comments: comments
    })
  }

  render() { 
    const { comments } = this.state;
    return (
      <div className="comment flexContainer">
        <div className="demo">
          <h4 className="title">评论功能</h4>
          <CommentInput onSubmit={this.handleSubmit}/>
          <CommentList comments={comments}/>
        </div>
        <ul className="detail">
          <h4 className="title">组件拆分，组件传值 props, 多个表单，ref Dom操作</h4>
          <li>1. 拆分组件 CommentApp 、CommentInput 、CommentList</li>
          <li>2. 父组件可以通过 props 给子组件传递 属性 或 方法,子组件 通过 父组件 传递的方法 可以回传数据</li>
          <li>3. 处理多个输入框 （onChange），给每个元素添加一个 name 属性，来让处理函数根据 event.target.name  的值来选择</li>
          <li>4. ref 属性获取已经挂载的元素的 DOM 节点； 例：用户名输入 在挂载完成 自动 focus </li>
        </ul>
      </div>
    );
  }
}
 
export default CommentApp;
import React, { Component } from 'react';
import CommentInput from './commentInput'
import CommentList from './commentList'
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
      <div className="">
        <h4 className="title">评论功能(父子、子父)</h4>
        <CommentInput onSubmit={this.handleSubmit}/>
        <CommentList comments={comments}/>
      </div>
    );
  }
}
 
export default CommentApp;
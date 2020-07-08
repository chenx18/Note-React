import React, { Component, Fragment } from 'react';

class CommentInput extends Component {
  constructor(props){
    super(props)
    this.state={
      userName: '',
      contents: ''
    }
  }
  // 监听输入
  // type 指的是需要监听 用户名 or 评论内容
  handleInputChange = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: val
    })
  }

  // 提交
  handleSubmit = () => {
    if(this.props.onSubmit) {
      const {userName, contents} = this.state;
      let params = {userName, contents};
      // 子组件中通过 this.props.属性名 访问对应变量或方法
      this.props.onSubmit(params); 
    }
  }
  //
  componentDidMount () {
    console.log(this.input)
    this.input.focus()
  }

  render() { 
    const {userName,contents} = this.state;
    return (
      <div className='comment-input'>
        <div className='comment-field flexContainer'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input name="userName" value={userName} 
              ref = {(e) => this.input = e}
              onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className='comment-field flexContainer'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea name="contents" value={contents} 
              onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    );
  }
}
 
export default CommentInput;

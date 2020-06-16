import React, { Component, Fragment } from 'react';

class CommentList extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() { 
    const { comments } = this.props;
    return (
      <Fragment>
        {comments.length>0 ? 
          comments.map((item,i)=> {
            return (
              <p key={i}>{item.userName} : {item.contents}</p>
            )
          }) : <p>暂无评论</p>
        }

          
      </Fragment>
    );
  }
}
 
export default CommentList;
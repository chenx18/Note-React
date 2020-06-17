import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "./CodeBlock";
import HeadingBlock from "./HeadingBlock";

class MarkApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:''
    }
  }

  componentWillMount() {
    const {markPath} = this.props;
    // 直接引入的markdown文件不能被识别，需要通过fetch来获取文件内容,
    // 这里取到的是导入的文件路径
    fetch(markPath)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render(){
    const {markdown} = this.state;
    return( 
      <div className="markdown">
       {
        !this.state.markdown ? 'loading...' :
        <ReactMarkdown 
          source={markdown} 
          escapeHtml={false}
          renderers={{
            code: CodeBlock,
          }}/>
      }
      </div>
    )
  }
}

export default MarkApp;

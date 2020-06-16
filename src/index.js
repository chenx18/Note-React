import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import "./assets/css/index.css"

//引入ant-design样式
import 'antd/dist/antd.css';

// 用React的语法把APP模块渲染到了root ID上面.这个rootID是在public\index.html文件中的。
ReactDom.render(<App />, document.getElementById('root'))


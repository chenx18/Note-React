//引入ant-design样式
import 'antd/dist/antd.css';
import "./assets/css/index.css"

import React from 'react'
import ReactDom from 'react-dom'
import App from './App'


// react-redux给我们提供了一个Provider组件,Provider包裹的所有组件都可以通过props来获取state
// Provider组件只接受一个属性，那就是store
import { Provider } from 'react-redux'
import store from '@/store'



// 用React的语法把APP模块渲染到了root ID上面.这个rootID是在public\index.html文件中的。
ReactDom.render(
<Provider store={store}>
  <App/>
</Provider>, 
document.getElementById('root'))


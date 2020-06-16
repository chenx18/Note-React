[数组操作方法](https://www.jianshu.com/p/eedcca015c4f)
[学react](https://juejin.im/post/5ededbf6e51d45786716a0ac#heading-9)  
### `npm start`
### `npm test`
### `npm build`
### `npm eject`

### ReactDom.render(<App />, document.getElementById('root'))

### Fragment 标签
- 定义数据 **this.state**
  ```js
    // js的构造函数，由于其他任何函数执行
    constructor(props) {
      super(props)  // 调用父类构造函数，固定写法
      this.state={
        inputValue: '',
        list:[]
      }
    }
  ```

### 修改数据：**this.setState**
> React是禁止直接操作state的
  ```js
  this.setState({
    inputValue: 'adasda',
  })
  ```

### JSX的注释:
  ```js
  {/* jsx 正确注释的写法 */}
  ```

### JSX class -> className
> 要把class换成className，它是防止和js中的class类名 冲突

### vscode中的Simple React Snippets
```js
imrc 生成 ↓
  import React, { Component } from 'react';


cc 生成 ↓
  class  extends Component {
      state = {  }
      render() { 
          return (  );
      }
  }

  export default ;
```

### ref

### router
```js
cnpm install react-router-dom --save
// or
cnpm install react-router --save
```
- react-router：是基本的router包，里边函的内容较多，但是在网页开发中有很多用不到，现在的市面上的课程讲的基本都是这个包的教程。
- react-router-dom：随着react生态环境的壮大，后出现的包，这个包比react-router包轻巧了很多。
- 安装了react-router包就不用安装了react-router-dom包。在实际开发中，请根据需要进行安装

- 路由器: BrowserRouter  HashRouter  ( [路由器](https://juejin.im/post/5e6e2ff46fb9a07ccd51a30b#heading-3))
- 路由匹配器: Route  Switch
- 导航： Link  NavLink  Redirect





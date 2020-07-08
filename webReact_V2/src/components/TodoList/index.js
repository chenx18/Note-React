
import React, {Component, Fragment} from 'react'
import store from '@/store/index'

class TodoList extends Component{
  // js的构造函数，由于其他任何函数执行
  constructor(props) {
    super(props)  // 调用父类构造函数，固定写法
    this.state={
      inputValue: '',
      list:[]
    }
    console.log(store.getState())
  }
  // 输入监听
  inputChange = (e) =>{
    let data = e.target.value
    this.setState({
      inputValue: data,
    })
  }

  // 新增
  addList=()=>{
    const {list, inputValue} = this.state;
    if(inputValue){
      this.setState({
        list: [...list, inputValue],
        inputValue: ''
      })
    }
  }

  // 删除
  delItem = (val) => {
    console.log(val)
    let {list} = this.state;
    list.splice(val, 1)
    this.setState({
      list
    })
  }

  // 生命周期
  // 1.组件将要渲染，AJAX，添加动画前的类
  componentWillMount(){
    console.log('1. componentWillMount----组件将要挂载到页面的时刻')
  }

  // 2.组件渲染完毕,添加动画
  componentDidMount(){
    console.log('2. componentDidMount----组件挂载完成的时刻执行')
  }

  // 3.组件将要接受props数据，查看接收props的数据什么
  // 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。
  componentWillReceiveProps(){
    console.log('3. componentWillReceiveProps')
  }

  // 4.组件接收到新的state或者props,判断是否更新。返回布尔值
  shouldComponentUpdate(){
    console.log('4. shouldComponentUpdate---组件发生改变前执行')
    return true
  }

  // 5.组件将要更新, shouldComponentUpdate返回true才会被执行。
  componentWillUpdate(){
    console.log('5. componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
  }

  // 6.组件已经更新
  componentDidUpdate(){
    console.log('6. componentDidUpdate----组件已经更新')
  }

  // 7.组件将要卸载
  componentWillUnmount(){
    console.log('7. componentWillUnmount----组件将要卸载')
  }

  // 渲染列表
  renderList = () => {
    const { list } = this.state;
    return (
      <ul>
        {
          list.map((item, i) => {
            return (
              <li key={i}>
                {item}   
                <span onClick={() => this.delItem(i)}> Del</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
  
  render(){
    console.log('render---组件挂载中.......')
    const { inputValue, list } = this.state;
    return (
      <div className="demo_lt">
        {/* jsx 正确注释的写法 */}
        <h5> TodoList </h5>
        <div >
          <input type="text" value={inputValue} onChange={this.inputChange}/>
          <button onClick={this.addList}>增加</button>
        </div>
        {this.renderList()}
      </div>
    )
  }
}

export default TodoList;
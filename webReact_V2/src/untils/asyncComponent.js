import React, {
  Component
} from 'react';

// 实现异步加载组件
export default function asyncComponent(loadComponent) {
  return class AsyncComponent extends Component {

    constructor() {
      super()
      this.state = {
        Child: null
      }
      this.unmount = false; // 组件是否被卸载
    }

    componentWillUnmount() {
      this.unmount = true;
    }

    async componentDidMount() {
      const { default: Child } = await loadComponent();
      if (this.unmount) return;
      this.setState({
        Child
      })
    }

    render() {
      const { Child  } = this.state;
      return (
        Child ? < Child {...this.props}/> : '加载中。。。'
      )
    }
  }
}

// 路由动态加载: https://blog.csdn.net/qq_35484341/article/details/80506297
import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { getDynamicRoute, hasDynamicRoute } from './../router';

class RouterAuth extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  handleRender = async() => {
    let has = hasDynamicRoute();
    if(!has){
      const dyRoute = await getDynamicRoute();
      // const accessRoutes = getAccessRoute(dyRoute);
      console.log('dyRoute', dyRoute)
    }
  }
  
  // 查询数组指定节点
  findPath = (data,pathname) => {
    let findNode= null;
    function deepSearch(data) {
      for(let i=0;i<data.length;i++){
        let item = data[i];
        if(item.children&&item.children.length) deepSearch(item.children)
        if(item.path === pathname){
          findNode = item
          break;
        }
      }
    }
    deepSearch(data);
    return findNode;
  }

  render(){
    let { location, config } = this.props;
    let { pathname } = location;
    let { token, isLogin } = JSON.parse(localStorage.getItem('user') || '{}')
    let targetRouterConfig = config.find((item) => item.path === pathname);
    if(isLogin) { // 登入状态
      if (pathname === '/login' || pathname === '/'){
        return <Redirect to='/home' />
      } else {
        // 如果路由存在
        if(targetRouterConfig) {
          //如果是需要登录的或者是404页面则直接进入
          if(targetRouterConfig.auth || pathname==='/404'){
            return <Route {...targetRouterConfig} /> 
          }else {
            return <Redirect to='/home' />
          }
        }else{
          let {path, component, children} = config[1];
          if(children.length != 0){
            let hasRoute = this.findPath(config, pathname);   // 查找是否在配置表中已经配置好
            if(hasRoute) {
              return <Route path={path} component={component} />
            }else {
              return <Redirect to='/404' />
            }
          }else {
            return <Redirect to='/404' />
          }
        }
      }
    } else { // 非登录状态
      // 如果路由存在
      if(targetRouterConfig) {
        // 如果需要登录，则跳转登录页面
        if(targetRouterConfig.auth){
          return <Redirect to='/login' />
        } else {
          let {component} = targetRouterConfig;
          return <Route exact path={pathname} component={component} />
        }
      }else {
        // 路由不存在 直接登录页
        return <Redirect to="/login" />
      }
      
    }
  }



}

export default RouterAuth;


// 参考文章： https://www.cnblogs.com/dibaosong/p/12661274.html
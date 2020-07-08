import React, { Component } from 'react';
import {BrowserRouter as Router, Route,  Link} from 'react-router-dom'
import { Menu, Button } from 'antd';

import {routes, dynamicMenu} from './../../router/index'

const { SubMenu } = Menu;
class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  // 递归菜单
  rederMenu = (data) => {
    return data.map((item,i) => {
      if(item.children.length>0) {
        return ( 
          <SubMenu key={item.name} title={item.menuName} >
            {this.rederMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.name} > 
          <Link to={item.path}>{item.menuName}</Link>
        </Menu.Item>
      )
    })
  }
  render() { 
    console.log('dynamicMenu',dynamicMenu)
    const menuList = routes[1].children
    return (
      <div className="sidebar">
        <div className="log">
          <img src={require('./../../assets/image/logo.png')} alt=""/>
        </div>
        
        <Menu defaultSelectedKeys={['home']} mode="inline" theme="dark" >
          { this.rederMenu(menuList) } 
          
        </Menu>
      </div>
    );
  }

  

}
 
export default Sidebar;
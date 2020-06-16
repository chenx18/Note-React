import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Menu, Dropdown } from 'antd';
import User from './../../api/user';

class Headbar extends Component {
  constructor(props){
    super(props)
    this.state={
      userInfo:{}
    }
  }
  
  render() { 
    return (
      <div>
        
        <div className="userInfo">
          <Dropdown overlay={this.initMenu} trigger={['click']}>
            <p className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              admin 
            </p>
          </Dropdown>
        </div>
      </div>
    );
  }
  // componentDidMount(){
  //   // this.getUserInfo();
  // }

  initMenu = () => {
    return (
      <Menu>
        <Menu.Item>
          我的消息
        </Menu.Item>
        <Menu.Item>
          设置
        </Menu.Item>
        <Menu.Item onClick={this.loginOut}>
          退出
        </Menu.Item>
      </Menu>
    )
  }
  //获取用户信息
  getUserInfo = () => {
    let {name='', nickName='', phoneNo=''} = JSON.parse(localStorage.getItem('user') || "{}");
    let userInfo = { name,nickName,phoneNo}
    this.setState({
      userInfo
    })
    console.log(this.state)
  }
  // 退出
  loginOut = (e) => {
    let token = localStorage.getItem('token');
    User.Loginout({'loginToken': token}).then(res => {
      if(res.data.Code === 1) {
        localStorage.removeItem('user');
        this.props.history.push({pathname: "/login"})
        // this.props.history.push({pathname: "/home", state: {data: user}})
      }
    })
  }
}
 
export default Headbar;
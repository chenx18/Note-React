import './login.scss';

import React, { Component } from 'react';

import User from './../../api/user';
import md5 from 'js-md5';

import { Button } from 'antd';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Login',
      userName: 'xiechen2',
      userPwd: '123456',
      loginFlag: false,
    }
  }

  // 组件渲染完毕
  componentDidMount() { 
    let user = JSON.parse(localStorage.getItem('user'));
    if(user) {
     this.setState({ userName: user.name })
    }
  }

  // 生成 GUID
  newGuid=() => {
    let guid = "";
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
        guid += "-";
      }
    }
    return guid;
  }

  // 监听输入
  handelInputChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  // 登录提交 
  logining = () => {
    let guId = (localStorage.getItem('guId') || "").replace(/\"/g, "");
    if (!guId) {
      guId = this.newGuid();
      localStorage.setItem('guId', JSON.stringify(guId));
    };
    if(this.state.userName && this.state.userPwd) {
      let params = {
        UserAccount: this.state.userName,
        UserPower: md5(this.state.userPwd).toUpperCase(),
        ClientMac: guId,
        CheckCode: ''
      };
      User.userLogin(params).then(res => {
        if(res.data.Code === 1) {
          this.setState({ loginFlag: true })
          const user = {
            name: res.data.Data.UserAccount,
            agentId: res.data.Data.AgentId,
            token: res.data.Data.Token,
            userId: res.data.Data.UserId,
            nickName: res.data.Data.NickName,
            phoneNo: res.data.Data.PhoneNo,
            isLogin: true,
          }
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', res.data.Data.Token);
          this.props.history.push({pathname: "/home", state: {data: user}})
        }
      })
    }
    // http://localhost:8081/api/UserManage/Authentication/Login
  }
  
  render() {
    const {userName, userPwd} = this.state;
    return(
      <div className="login-box">
        <div  className="login-form">
          <p className="form-title"> Login...</p>
          <label> 
            <input type="text" name="userName" placeholder="输入用户名" onChange={this.handelInputChange} value={userName}/>
          </label>
          <br/>
          <label> 
            <input type="password" name="userPwd" placeholder="输入密码" onChange={this.handelInputChange} value={userPwd}/>
          </label> 
          <br/>
          <label> 
            {/* <Button onClick={this.logining} type="primary">登入</Button> */}
            <input type="submit" onClick={this.logining} value='登入'/>
          </label>
        </div>
      </div>
    )
  }
}
export default Login;
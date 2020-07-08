import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { Layout } from 'antd';

import Sidebar from './sidebar/sidebar'
import Headbar from './headbar/headbar'

import { routes } from '../router/index';
import './index.scss';

class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderRoute = (data) => {
    return data.map((item,i) => {
      if(item.children.length>0) {
        return(this.renderRoute(item.children));
      } 
      return ( <Route key={i} {...item} /> )
    })
  }

  render() {
    const data = routes[1].children
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout className="container">
          <Sider> <Sidebar /> </Sider>
          <Layout>
            <Header> <Headbar history={this.props.history}/> </Header>
            <Content>
              <Switch>
                {this.renderRoute(data)}
              </Switch>
              <Footer>Made with ❤ by XTech</Footer>
            </Content>
          </Layout>
        </Layout>
    )
  }
}

export default Layouts
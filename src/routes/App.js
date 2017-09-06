import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Layout, Menu } from 'antd';
import styles from './App.css';

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo} />
          <Menu
            className={styles.menu}
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/">每日一题</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/home">IT咨询</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          {
          this.props.children
        }
        </Content>
        <Footer className={styles.footer}>
          星辰阁 &copy; 2017 — All Rights Reserved.
          <a href="http://www.miitbeian.gov.cn/" target="_blank">
            豫ICP备17033860号-1
          </a>
        </Footer>
      </Layout>
    );
  }
}

export default App;

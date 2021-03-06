import React from "react";
import Detail from "./Detail";
import Home from "./Home";
import Admin from "./AdminRouter";
import Login from "./Login";
import BookManagement from "./BookManagement"
import ReceiptManagement from './ReceiptManagement.js'
import Register from "./Register";
import CustomerManagement from './CustomerManagement.js';
import StaffManagement from './StaffManagement.js';
import GenreManagement from './GenreManagement.js';
import SettingManagement from './SettingManagement.js';
//import ReceiptManagement from './ReceiptManagement.js';
import { Layout, Menu, Icon, Avatar, Input, Dropdown, Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
export default class UserRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      visible: false
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleMenuClick = e => {
    if (e.key === "3") {
      this.setState({ visible: false });
    }
  };
  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Logout</Menu.Item>
      </Menu>
    );
    return (
      <Router>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Link to="/admin/book">
                  <Icon type="pie-chart" />
                  <span>Quản lý sách</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/admin/staff">
                  <Icon type="pie-chart" />
                  <span>Quản lý nhân viên</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/admin/customer">
                  <Icon type="pie-chart" />
                  <span>Quản lý khách hàng</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/admin/receipt">
                  <Icon type="pie-chart" />
                  <span>Quản lý hóa đơn</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/admin/type">
                  <Icon type="pie-chart" />
                  <span>Quản lý thể loại</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/admin/setting">
                  <Icon type="pie-chart" />
                  <span>Cài đặt chung</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              theme="light"
              style={{
                zIndex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "white"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <div>
                  <Avatar shape="cirlce" size={40} icon="user" />
                  <Dropdown overlay={menu}>
                    <b>Admin</b>
                  </Dropdown>
                </div>
              </div>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              {/* <<<<<<< HEAD
              <Switch>
                <Route  path="/admin/book">
                  <BookManagement />
                </Route>
                <Route  path="/admin/customer">
                  <CustomerManagement />
                </Route>
                <Route  path="/admin/staff">
                  <StaffManagement />
                </Route>
                <Route  path="/admin/bill">
                  {/* <ReceiptManagement /> 
                </Route>
              </Switch> */}

              <Route exact path="/admin" component={BookManagement} />
              <Route exact path="/admin/book" component={BookManagement} />
              <Route
                exact
                path="/admin/customer"
                component={CustomerManagement}
              />
              <Route exact path="/admin/staff" component={StaffManagement} />
              <Route
                exact
                path="/admin/receipt"
                component={ReceiptManagement}
              />

              <Route
                exact
                path="/admin/type"
                component={GenreManagement}
              />

              <Route
                exact
                path="/admin/setting"
                component={SettingManagement}
              />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

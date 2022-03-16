import { useState } from "react"
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from "antd"
import "./index.less"

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DashboardOutlined,
  LineChartOutlined,
} from "@ant-design/icons"

const { Header, Sider, Content, Footer } = Layout

export default function BaseLayout({ children }) {
  const [collapsed, toggleCollapsed] = useState(false)

  const breadcrumbNameMap = {
    '/dashboard': 'Dashboard',
    '/user': 'User',
  };

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <DashboardOutlined />
      <Link to="/dashboard">Dashboard</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo text-white font-semibold text-xl p-4">
          Admin Plus
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[`${location.pathname}`]}>
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/users" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="/charts" icon={<LineChartOutlined />}>
            <Link to="/charts">Charts</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="layout-header">
          {collapsed ? (
            <MenuUnfoldOutlined
              onClick={() => toggleCollapsed(false)}
            ></MenuUnfoldOutlined>
          ) : (
            <MenuFoldOutlined
              onClick={() => toggleCollapsed(true)}
            ></MenuFoldOutlined>
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "14px 16px",
            padding: 14,
            minHeight: 280,
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbItems}
          </Breadcrumb>

          <div style={{ backgroundColor: "#fff", padding: 24, minHeight: 380 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design Admin Plus ©2022
        </Footer>
      </Layout>
    </Layout>
  )
}

import { useState } from 'react';
import { Layout, Menu } from 'antd';
import './index.less';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DashboardOutlined,
  LineChartOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function BaseLayout({children}) {
  const [collapsed, toggleCollapsed] = useState(false);

  return (
    <Layout className='layout'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo text-white font-semibold text-xl p-4">Admin Plus</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="3" icon={<LineChartOutlined />}>
              Charts
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, color: '#fff' }}>
            {
              collapsed ? <MenuUnfoldOutlined onClick={() => toggleCollapsed(false)}></MenuUnfoldOutlined> : <MenuFoldOutlined onClick={() => toggleCollapsed(true)}></MenuFoldOutlined>
            }
            {/* {React.createElement(, {
              className: 'trigger',
              onClick: toggle,
            })} */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
  )
}

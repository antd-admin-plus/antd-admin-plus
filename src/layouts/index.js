import { useState } from "react"
import { Layout } from "antd"
import "./index.less"

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons"

import HeaderRightSpace from "./components/HeaderRightSpace"
import MenuSider from "./components/Sider"
import BreadcrumbNav from "./components/Breadcrumb"
import NavCard from "./components/NavCard"

const { Header, Sider, Content, Footer } = Layout

export default function BaseLayout({ children }) {
  const [collapsed, toggleCollapsed] = useState(false)

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo text-white font-semibold text-xl p-4">
          Admin Plus
        </div>
        <MenuSider></MenuSider>
      </Sider>
      <Layout className="site-layout">
        <Header className={`${collapsed ? 'layout-collapsed-header' : 'layout-header'}`} >
          {collapsed ? (
            <MenuUnfoldOutlined
              onClick={() => toggleCollapsed(false)}
            ></MenuUnfoldOutlined>
          ) : (
            <MenuFoldOutlined
              onClick={() => toggleCollapsed(true)}
            ></MenuFoldOutlined>
          )}
          <HeaderRightSpace></HeaderRightSpace>
        </Header>
        <Content
          className="layout-background"
        >
          <NavCard />
          {children}
        </Content>
        <Footer style={{ display: 'block',textAlign: "center" }}>
          Ant Design Admin Plus ©2022
        </Footer>
      </Layout>      
    </Layout>
  )
}

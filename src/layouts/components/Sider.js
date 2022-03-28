import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "antd"

import {
  UserOutlined,
  AlertOutlined,
  DashboardOutlined,
  LineChartOutlined,
} from "@ant-design/icons"

const { SubMenu } = Menu

export default function Sider() {
  const location = useLocation()
  const [defaultSelectedKey, setDefaultSelectedKeys] = useState('/dashboard')

  useEffect(() => {
    console.log(location.pathname)
    setDefaultSelectedKeys(location.pathname)
  }, [location.pathname])

  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[`${defaultSelectedKey}`]}
        selectedKeys={[`${defaultSelectedKey}`]}
      >
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/users" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <SubMenu key="/exceptions" icon={<AlertOutlined />} title="Exceptions">
          <Menu.Item key="/exceptions/403">
            <Link to="/exceptions/403">403</Link>
          </Menu.Item>
          <Menu.Item key="/exceptions/404">
            <Link to="/exceptions/404">404</Link>
          </Menu.Item>
          <Menu.Item key="/exceptions/500">
            <Link to="/exceptions/500">500</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/charts" icon={<LineChartOutlined />}>
          <Link to="/charts">Charts</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

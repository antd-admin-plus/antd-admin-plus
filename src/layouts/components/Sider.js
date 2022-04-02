import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "antd"

import {
  UserOutlined,
  AlertOutlined,
  FormOutlined,
  TableOutlined,
  DashboardOutlined,
  LineChartOutlined,
  TrademarkCircleOutlined
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
        <SubMenu key="/dashboard" icon={<DashboardOutlined />} title="Dashboard">
          <Menu.Item key="/dashboard/analysis">
            <Link to="/dashboard/analysis">Analysis</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/monitor">
            <Link to="/dashboard/monitor">Monitor</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/workspace">
            <Link to="/dashboard/workspace">Workspace</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/form" icon={<FormOutlined />}>
          <Link to="/form">Form</Link>
        </Menu.Item>
        <Menu.Item key="/list" icon={<TableOutlined />}>
          <Link to="/list">List</Link>
        </Menu.Item>
        <SubMenu key="/users" icon={<UserOutlined />} title="User">
          <Menu.Item key="/users/center">
            <Link to="/users/center">User Center</Link>
          </Menu.Item>
          <Menu.Item key="/users/setting">
            <Link to="/users/setting">User Setting</Link>
          </Menu.Item>
        </SubMenu>    
        <SubMenu key="/result" icon={<TrademarkCircleOutlined />} title="Result">
          <Menu.Item key="/result/success">
            <Link to="/result/success">Success</Link>
          </Menu.Item>
          <Menu.Item key="/result/fail">
            <Link to="/result/fail">Fail</Link>
          </Menu.Item>
        </SubMenu>
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

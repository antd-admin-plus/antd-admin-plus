import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { Breadcrumb } from "antd"

import { DashboardOutlined } from "@ant-design/icons"

import { breadcrumbNameMap } from "./breadcrumbNameMap"

export default function BreadcrumbNav() {

  const location = useLocation()
  const pathSnippets = location.pathname.split("/").filter((i) => i)

  console.log(pathSnippets)

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    )
  })

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <DashboardOutlined />
      <Link to="/dashboard">Dashboard</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
    {breadcrumbItems}
  </Breadcrumb>
  )
}

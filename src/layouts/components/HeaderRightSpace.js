import React from "react"
import { Popover, Menu, Avatar } from "antd"

import avatar from '@/logo.png'

const { SubMenu } = Menu

export default function HeaderRightSpace() {

  const handleClickSignOut = () => {
    localStorage.removeItem('username')
    window.location.href = '/'
  }

  return (
    <Menu key="user" mode="horizontal" theme="dark">
        <SubMenu
          title={
            <>
              <span style={{ color: '#999', marginRight: 4 }}>
                 Hi,
              </span>
              <span>admin</span>
              <Avatar style={{ marginLeft: 8 }} src={avatar} />
            </>
          }
        >
          <Menu.Item key="SignOut" onClick={handleClickSignOut}>
             Sign out
          </Menu.Item>
        </SubMenu>
      </Menu>
  )
}

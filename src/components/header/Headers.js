import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { Menu, Button } from 'antd'
import Account from '../account/accounts/Account'
import './Header.css'

function Headers() {
  // const [visible, setVisible] = useState(false)

  // const showDrawer = () => {
  //   setVisible(true)
  // }

  // const onClose = () => {
  //   setVisible(false)
  // }
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100.003"
              height="97.186"
              viewBox="0 0 213 207"
            >
              <image
                width="213"
                height="207"
                xlinkHref="data:img/png;base64,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"
              />
            </svg>{' '}
            Truyện Online
          </Link>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/test1" title="cart">
              Danh sách truyện
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/forgot_password" title="cart">
              Truyện
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/login" title="cart">
              Login
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/reset_password" title="cart">
              reset
            </Link>
          </Menu.Item>
        </Menu>
        <div className="log">
          {/* <Switch>
            <Route path="/account" component={Account} exact>
              <Button shape="round">Tài khoản</Button>
            </Route>
          </Switch> */}
          <Link to="/accounts">
            <Button shape="round">Tài khoản</Button>
          </Link>
        </div>
      </div>
      {/* <Account/> */}
    </div>
  )
}

export default Headers

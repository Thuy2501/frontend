import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import './accounts.css'

const Test2 = (props) => {
  //toggle login to register
  console.log(props.match.path)
  const [toggle, setToggle] = useState('')
  const toggler = (sign) => {
    console.log(sign)
    sign === 'signUp' ? setToggle('register') : setToggle('login')
  }
  return (
    <>
      <div className="contain">
        <div className={`cont ${toggle}`}>
          <div
            style={{
              position: 'absolute',
              left: toggle === 'login' ? '0' : '260px',
              transition: 'left 0.5s'
            }}
          >
            <Route path={`${props.match.path}/login`} component={Login} />
            <Route path={`${props.match.path}/register`} component={Register} />
          </div>
          <div
            className="sub-cont"
            style={{
              left: toggle === 'login' ? '640px' : '0',
              transition: 'left 2.5s',
              width: 'auto'
            }}
          >
            <div className="img">
              <div className="img__text m--up">
                <h2>Nơi đây?</h2>
                <p>Đăng ký và khám phá nhiều cơ hội mới!</p>
              </div>
              <div className="img__text m--in">
                <h2>Một trong số chúng tôi?</h2>
                <p>
                  Nếu bạn đã có tài khoản, chỉ cần đăng nhập. Chúng tôi đã nhớ
                  bạn!
                </p>
              </div>
              <div style={{ position: 'relative', zIndex: '10' }}>
                <Link
                  to={`${props.match.path}/register`}
                  onClick={() => toggler('signUp')}
                  style={{
                    visibility: toggle === 'register' ? 'hidden' : 'visible'
                  }}
                >
                  <span className="m--up">Đăng kí</span>
                </Link>
                <Link
                  to={`${props.match.path}/login`}
                  onClick={() => toggler('signIn')}
                  style={{
                    visibility: toggle === 'login' ? 'hidden' : 'visible'
                  }}
                >
                  <span className="m--in">Đăng nhập</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Test2

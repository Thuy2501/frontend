import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import './test1.css'

const Test1 = (props) => {
  //login-register
  // const auth = useSelector((state) => state.auth)
  // const { isLogged } = auth

  //toggle login to register
  const [toggle, setToggle] = useState('')
  const toggler = () => {
    toggle ? setToggle('') : setToggle('s--signup')
  }
  return (
    <div className="contain">
      <div className={`cont ${toggle}`}>
        {/* <Account /> */}
        <Route path={`${props.match.path}/login`} component={Login} />
        <div className="sub-cont">
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
            <div className="img__btn" onClick={toggler}>
              <Link to={`${props.match.path}/register`}>
                <span className="m--up">Đăng kí</span>
              </Link>
              <Link to={`${props.match.path}/login`}>
                <span className="m--in">Đăng nhập</span>
              </Link>
            </div>
          </div>
          <Route path={`${props.match.path}/register`} component={Register} />
        </div>
      </div>
    </div>
  )
}

export default Test1

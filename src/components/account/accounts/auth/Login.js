import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import google from '../../../../assets/images/google.png'

const Login = () => {
  return (
    <div className="form sign-in">
      <h2>Chào mừng quay trở lại</h2>
      <label>
        <span>Email</span>
        <input type="email" />
      </label>
      <label>
        <span>Mật khẩu</span>
        <input type="password" />
      </label>
      <button type="button" className="submit">
        Đăng nhập
      </button>
      <Link to="/forgot_password">
        <p className="forgot-pass">Quên mật khẩu?</p>
      </Link>
      <div className="abc">
        <button type="button" className="fb-btn">
          <span>facebook</span>
        </button>
        <button type="button" className="fb-btn">
          <img src={google} alt="" />
        </button>
      </div>
 
    </div>
  )
}

export default Login

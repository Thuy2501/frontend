// import React, { useState } from 'react'

const Register = () => {
  return (
    <div className="form sign-up">
      <h2>Thời gian giúp thư giãn</h2>
      <label>
        <span>Name</span>
        <input type="text" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" />
      </label>
      <label>
        <span>Mật khẩu</span>
        <input type="password" />
      </label>
      <button type="button" className="submit">
        Đăng kí
      </button>
    </div>
  )
}

export default Register

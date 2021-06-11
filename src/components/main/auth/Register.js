import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch
} from '../../utils/validation/Validation'
import {
  showErrMsg,
  showSuccessMsg
} from '../../utils/notification/Notification'
import axios from 'axios'
import './account.css'
import { DoubleLeftOutlined } from '@ant-design/icons'

const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

const Register = () => {
  
  const [reader, setReader] = useState(initialState)

  const { name, email, password, cf_password, err, success } = reader

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setReader({ ...reader, [name]: value, err: '', success: '' })
    console.log('reader..............', reader)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

     if (isEmpty(name) || isEmpty(password))
        return setReader({
          ...reader,
          err: 'Vui lòng không để trống!',
          success: ''
        })
      if (!isEmail(email))
        return setReader({ ...reader, err: 'Email không hợp lệ!', success: '' })

      if (isLength(password))
        return setReader({
          ...reader,
          err: 'Mật khẩu phải ít nhất 6 kí tự.',
          success: ''
        })

      if (!isMatch(password, cf_password))
        return setReader({
          ...reader,
          err: 'Mật khẩu không khớp.',
          success: ''
        })
    try {
     const res = await axios.post('/reader/register', {
       name,
       email,
       password
     })
       setReader({ ...reader, err: '', success: res.data.msg })
    } catch (err) {
      err.response.data.msg &&
        setReader({ ...reader, err: err.response.data.msg, success: '' })
    }
  }

  return (
    <div className="contain">
      <div className="cont">
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}
        <form className="form" onSubmit={handleSubmit}>
          <h2>Chào mừng quay trở lại</h2>
          <label>
            <span>Tên</span>
            <input
              type="name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </label>
          <label>
            <span>Mật khẩu</span>
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChangeInput}
            />
          </label>
          <label>
            <span>Nhập lại mật khẩu</span>
            <input
              type="password"
              value={cf_password}
              name="cf_password"
              onChange={handleChangeInput}
            />
          </label>
          <button type="submit" className="submit">
            Đăng nhập
          </button>
          <div className="back">
            <Link to="/login">
              <button type="button" className="submit">
                <DoubleLeftOutlined />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register

import { Link ,useHistory} from 'react-router-dom'
import { useState } from 'react'
import {
  showErrMsg,
  showSuccessMsg
} from '../../utils/notification/Notification'
import google from '../../../assets/images/google.png'
import axios from 'axios'
import { dispatchLogin } from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import './account.css'

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

const Login = () => {
  const [ reader, setReader ] = useState(initialState)
  const dispatch = useDispatch()
  const history = useHistory()

  const { email, password, err, success } = reader

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setReader({ ...reader, [name]: value, err: '', success: '' })
    console.log('reader..............', reader)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/reader/login', { email, password })
      setReader({ ...reader, err: '', success: res.data.msg })

      localStorage.setItem('firstLogin', true)
      dispatch(dispatchLogin())
      history.push("/")
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
          <button type="submit" className="submit">
            Đăng nhập
          </button>
          <div className="pass">
            <Link to="/register" className="register-pass">
              Đăng kí để khám phái ngay!
            </Link>
            <Link to="/forgot_password" className="forgot-pass">
              Quên mật khẩu?
            </Link>
          </div>
          <div className="abc">
            <button type="button" className="fb-btn">
              <span>facebook</span>
            </button>
            <button type="button" className="fb-btn">
              <img className="google" src={google} alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

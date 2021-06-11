import { Link } from 'react-router-dom'
import { DoubleLeftOutlined } from '@ant-design/icons'
import './account.css'

const ForgotPassword = () => {
  return (
    <div className="contain">
      <div className="cont">
        <div className="form">
          <h2>Nhập Email đăng kí tài khoản của bạn</h2>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <button type="button" className="submit">
            Quên mật khẩu
          </button>
          <div className="back-forgot">
            <Link to="/login">
              <button type="button" className="submit">
                <DoubleLeftOutlined />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

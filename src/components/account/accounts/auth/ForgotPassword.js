

const ForgotPassword = () => {
  return (
    <div className="contain">
      
      <div className="cont">
        <div className="form sign-in">
          <h2>Quên mật khẩu</h2>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <button type="button" className="submit">
            Xác nhận
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>Quên mật khẩu</h2>
              <p>
                Bạn hãy liểu tra mail của mình! Click vào vào nút hoặc link là
                thành công rồi đó
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

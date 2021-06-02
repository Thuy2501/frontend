import React from 'react'
import './footer.css'
import { BackTop } from 'antd'
import { UpCircleOutlined } from '@ant-design/icons'

function Footers() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="copyright">
          2021 &copy; Truyen Online
          <img
            src="https://res.cloudinary.com/dint5xlbc/image/upload/v1622045677/avatar/liohzopuyqtsftqc3lja.png"
            alt=""
            width="25"
            height="25"
          />
        </div>
        <BackTop>
          <div className="goTop">
            <UpCircleOutlined className="iconTop" />
          </div>
        </BackTop>
      </div>
    </div>
  )
}

export default Footers

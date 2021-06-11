import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  dispatchLogin,
  fetchReader,
  dispatchGetReader
} from './redux/actions/authAction'
import axios from 'axios'

import 'antd/dist/antd.css'
import Headers from './components/header/Headers'
import Main from './components/main/Main'
import Footers from './components/footer/Footers'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

function App() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post('/reader/refresh_token', null)

        dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
        console.log('res.data.access_token.........', res.data.access_token)
      }
      getToken()
    }
  }, [auth.isLogged, dispatch])

  useEffect(() => {
    if (token) {
      const getReader = () => {
        dispatch(dispatchLogin())
        return fetchReader(token).then((res) => {
          dispatch(dispatchGetReader(res))
        })
      }
      getReader()
    }
  }, [token, dispatch])

  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <Headers />
        </Header>
        <Content
          style={{
            backgroundColor: '#fff',
            margin: '65px 0 0 0'
          }}
        >
          <Main />
        </Content>
        <Footer>
          <Footers />
        </Footer>
      </Layout>
    </Router>
  )
}

export default App

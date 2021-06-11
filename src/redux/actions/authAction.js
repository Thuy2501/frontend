import ACTIONS from './index'
import axios from 'axios'

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN
  }
}

export const fetchReader = async (token) => {
  const res = await axios.get('/reader/infor', {
    headers: { Authorization: token }
  })
  return res
}

export const dispatchGetReader = (res) => {
  return {
    type: ACTIONS.GET_READER,
    payload: {
      reader: res.data,
      isAdmin: res.data.role === 1 ? true : false
    }
  }
}

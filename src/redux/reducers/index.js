import { combineReducers } from 'redux'
import token from './tokenReducer'
import auth from './authReducer'

export default combineReducers({
    auth,
    token
})
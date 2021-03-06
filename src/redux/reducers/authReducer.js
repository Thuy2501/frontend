import ACTIONS from '../actions/'

const initialState = {
    reader: [],
    isLogged: false,
    isAdmin:false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTIONS.LOGIN:
        return {
          ...state,
          isLogged: true
        }
      case ACTIONS.GET_READER:
        return {
          ...state,
          reader: action.payload.reader,
          isAdmin: action.payload.isAdmin
        }
      default:
        return state
    }
}

export default authReducer
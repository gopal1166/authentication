// reducers for authentication
import * as actionTypes from '../actions/actionTypes';

let initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      }

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.authData.key,
        error: null,
        loading: false,
      }

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}

export default authReducer;

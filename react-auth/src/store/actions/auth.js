import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    // let error = {}
    // error = error_obj
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        let data = {}
        data['email'] = email
        data['password'] = password
        axios.post("/rest-auth/login/", data)
        .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.key)
          dispatch(authSuccess(response.data))
        })
        .catch(error => dispatch(authFail(error.response.data)) )
    };
};

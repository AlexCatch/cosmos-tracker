import * as types from '../constants/ActionTypes';

import history from '../history/history'

export function login(email, password) {
    return (dispatch) => {
        dispatch({type: types.LOGIN_BEGIN});
        axios.post('/api/auth/login', {
            email,
            password
        }).then(function (response) {
            console.log(response.data);
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.data.user));
            dispatch({
                type: types.LOGIN_RESULT,
                authToken: response.data.data.token,
                user: response.data.data.user
            });
            history.push('/dashboard');
        }).catch(function (error) {
            console.log(error.response.data);
            dispatch({
                type: types.LOGIN_RESULT,
                loginError: error.response.data.error ? error.response.data.error : error.message
            });
        });
    };
}

export function register(name, email, password, password_confirmation) {
    return (dispatch) => {
        dispatch({type: types.SIGNUP_BEGIN});
        axios.post('/api/auth/sign-up', {
            name,
            email,
            password,
            password_confirmation
        }).then(function (response) {
            console.log(response.data);
            dispatch({
                type: types.SIGNUP_RESULT,
                error: null,
                sentTo: response.data.data.verification_sent_to
            });
        }).catch(function (error) {
            console.log(error.response.data);
            dispatch({
                type: types.SIGNUP_RESULT,
                error: error.response.data.error ? error.response.data.error : error.message
            });
        });
    }
}

/**
 * Initialize authentication from local storage
 */
export function initAuth() {
    //Fetch user & token from local storage
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
        return {
            type: types.DID_INIT_AUTH,
            user: null,
            token: null
        };
    }

    try {
        JSON.parse(user);
    }catch (e) {
        return {
            type: types.DID_INIT_AUTH,
            user: null,
            token: null
        }
    }
    return {
        type: types.DID_INIT_AUTH,
        user: JSON.parse(user),
        token
    }

}

export function logout() {
    history.push('/login');
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return {
        type: types.DID_LOGOUT
    }
}
import * as types from '../constants/ActionTypes';

const initialState = {
    authToken: null,
    user: null,

    loginError: null,
    isAuthenticating: false,

    signupError: null,
    isSigningUp: false,
    verificationSentTo: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_BEGIN:
            console.log("login begin");
            return {
                ...state,
                loginError: null,
                isAuthenticating: true
            };
        case types.LOGIN_RESULT:
            return {
                ...state,
                loginError: action.loginError,
                isAuthenticating: false,
                authToken: action.authToken,
                user: action.user
            };
        case types.SIGNUP_BEGIN:
            return {
                ...state,
                signupError: null,
                isSigningUp: true
            };
        case types.SIGNUP_RESULT:
            return {
                ...state,
                signupError: action.error,
                isSigningUp: false,
                verificationSentTo: action.sentTo
            };
        case types.DID_INIT_AUTH:
            return {
                ...state,
                authToken: action.token,
                user: action.user
            };
        case types.DID_LOGOUT:
            return {
                ...state,
                authToken: null,
                user: null
            };
        default:
            return state;
    }
};

export default auth;
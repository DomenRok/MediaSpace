const initialState = {
    token: localStorage.getItem("mediaspacetoken"),
    isAuthenticated: false,
    isLoading: true,
    user: localStorage.getItem("mediaspaceuser"),
    errors: {},
};


export default function auth(state=initialState, action: any) {

    switch (action.type) {

        case 'USER_LOADING':
            return {...state, isLoading: true};

        case 'USER_LOADED':
            return {...state, isAuthenticated: true, isLoading: false, user: action.user};

        case 'LOGIN_STORAGE':
            return {...state, isAuthenticated: true};

        case 'LOGIN_SUCCESSFUL':
        case 'REGISTRATION_SUCCESSFUL':
            localStorage.setItem("mediaspacetoken", action.data.token);
            localStorage.setItem("mediaspaceuser", action.data.username);
            return {...state, token: action.data.token, isAuthenticated: true, isLoading: false, errors: null, user: action.data.username};

        case 'AUTHENTICATION_ERROR':
        case 'LOGIN_FAILED':
        case 'REGISTRATION_FAILED':
        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("mediaspacetoken");
            localStorage.removeItem("mediaspaceuser");
            return {...state, errors: action.data, token: null, user: null,
                isAuthenticated: false, isLoading: false};

        default:
            return state;
    }
}
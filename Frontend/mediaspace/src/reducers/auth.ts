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
            localStorage.setItem("mediaspacetoken", action.data.key);
            localStorage.setItem("mediaspaceuser", action.user);
            return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null, user: action.user};

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
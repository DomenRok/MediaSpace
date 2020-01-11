const initialState = {
    token: localStorage.getItem("token"),
    movie: null,
    isAuthenticated: false,
    isLoading: true,
    user: null,
    errors: {},
};


export default function auth(state=initialState, action: any) {

    switch (action.type) {

        case 'ADD_MOVIE':
        case 'FETCH_MOVIE':
            return {...state, movie: action.movie};

        case 'UPDATE_MOVIE':
            return {...state, movie: action.movie, index: action.index};

        case 'DELETE_MOVIE':
            return {...state, index: action.index}

        case 'USER_LOADED':
            return {...state, isAuthenticated: true, isLoading: false, user: action.user};

        case 'LOGIN_SUCCESSFUL':
        case 'REGISTRATION_SUCCESSFUL':
            localStorage.setItem("token", action.data.token);
            return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};

        case 'AUTHENTICATION_ERROR':
        case 'LOGIN_FAILED':
        case 'REGISTRATION_FAILED':
        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("token");
            return {...state, errors: action.data, token: null, user: null,
                isAuthenticated: false, isLoading: false};

        default:
            return state;
    }
}
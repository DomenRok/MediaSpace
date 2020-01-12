const initialState = {
    token: localStorage.getItem("token"),
    movies: null,
    genres: null,
    isAuthenticated: false,
    isLoading: true,
    user: null,
    errors: {},
};


export default function auth(state=initialState, action: any) {

    switch (action.type) {

        case 'ADD_MOVIE':
        case 'FETCH_MOVIE':
            return {...state, movies: action.data};

        case 'FETCH_GENRES':
            return {...state, genres: action.data};

        case 'UPDATE_MOVIE':
            return {...state, movie: action.movie, index: action.index};

        case 'DELETE_MOVIE':
            return {...state, index: action.index}

        case 'USER_LOADED':
            return {...state, isAuthenticated: true, isLoading: false, user: action.user};

        default:
            return state;
    }
}
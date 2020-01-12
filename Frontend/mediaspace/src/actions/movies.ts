export const getGenres = () => {
    return (dispatch: any, getState: any) => {
        let headers = {"Content-Type": "application/json"} as any;
        const {token} = getState().auth;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        return fetch("http://127.0.0.1:8000/api/v1/content/genre", {headers,})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then((res: any) => {
                if (res.status === 200) {
                    return dispatch({type: 'FETCH_GENRES', data: res.data});
                } else if (res.status === 401 || res.status === 403) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            });
    };
};

export const fetchMovies = (next = "") => {
    return (dispatch: any, getState: any) => {
        let headers = {"Content-Type": "application/json"} as any;
        let {token} = getState().auth;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        let url = (next) ? next : "http://localhost:8000/api/v1/content/movie";
        return fetch(url, {headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return dispatch({type: 'FETCH_MOVIE', data: res.data});
                } else if (res.status === 401 || res.status === 403) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
};

export const addNote = (text: any) => {
    return (dispatch: any, getState: any) => {
        let headers = {"Content-Type": "application/json"} as any;
        let {token} = getState().auth;

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }

        let body = JSON.stringify({text, });
        return fetch("/api/notes/", {headers, method: "POST", body})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 201) {
                    return dispatch({type: 'ADD_MOVIE', movie: res.data});
                } else if (res.status === 401 || res.status === 403) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
}

export const updateNote = (index: number, text: any) => {
    return (dispatch: any, getState: any) => {

        let headers = {"Content-Type": "application/json"} as any;
        let {token} = getState().auth;

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }

        let body = JSON.stringify({text, });
        let noteId = getState().notes[index].id;

        return fetch(`/api/notes/${noteId}/`, {headers, method: "PUT", body})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return dispatch({type: 'UPDATE_MOVIE', movie: res.data, index});
                } else if (res.status === 401 || res.status === 403) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
}

export const deleteNote = (index: number) => {
    return (dispatch: any, getState: any) => {

        let headers = {"Content-Type": "application/json"} as any;
        let {token} = getState().auth;

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }

        let noteId = getState().notes[index].id;

        return fetch(`/api/notes/${noteId}/`, {headers, method: "DELETE"})
            .then(res => {
                if (res.status === 204) {
                    return {status: res.status, data: {}};
                } else if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 204) {
                    return dispatch({type: 'DELETE_MOVIE', index});
                } else if (res.status === 401 || res.status === 403) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
}
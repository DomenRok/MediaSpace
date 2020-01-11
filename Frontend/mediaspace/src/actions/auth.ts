import $ from "jquery";
interface IUser {
    username: string;
    password: string;
}
const APIURL = "http://127.0.0.1:8000/api/v1/users";
export const loadUser = () => {
    return (dispatch: any, getState: any) => {
        dispatch({type: "USER_LOADING"});
        const localToken = localStorage.getItem("mediaspacetoken");
        const localUser = localStorage.getItem("mediaspaceuser");
        if (localToken !== null && localUser !== null && !getState().auth.isAuthenticated) {
            dispatch({type: 'USER_LOADED'});
        }
    }
}

export const login = (formDetails: IUser) => {

    return (dispatch: any, getState: any) => {
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify(formDetails);

        return fetch(APIURL+"/login", {headers, body, method: "POST"})
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
            .then((res:any) => {
                if (res.status === 200) {
                    (document.getElementsByClassName("modal-backdrop")[0].parentNode as any).removeChild(document.getElementsByClassName("modal-backdrop")[0]);
                    //($('#LoginModal') as any).modal('hide');
                    dispatch({type: 'LOGIN_SUCCESSFUL', data: res.data, user: formDetails.username });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                } else {
                    console.log("failed login");
                    dispatch({type: "LOGIN_FAILED", data: res.data});
                    throw res.data;
                }
            })
    }
}

export const logout = () => {
    localStorage.clear();
    return (dispatch: any, getState: any) => {
        let headers = {"Content-Type": "application/json"};

        return fetch(APIURL+"/logout/", {headers, body: "", method: "POST"})
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
                    dispatch({type: 'LOGOUT_SUCCESSFUL'});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
}

export const register = (username: string, password: string) => {
    return (dispatch: any, getState: any) => {
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify({username, password});

        return fetch("/api/auth/register/", {headers, body, method: "POST"})
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
                    dispatch({type: 'REGISTRATION_SUCCESSFUL', data: res.data });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                } else {
                    dispatch({type: "REGISTRATION_FAILED", data: res.data});
                    throw res.data;
                }
            })
    }
}
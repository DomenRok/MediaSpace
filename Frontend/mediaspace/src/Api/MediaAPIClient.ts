const APIURL = "http://127.0.0.1:8000/api/v1";
const USERS = "/users";
const LOGIN = "/rest-auth/login";
const LOGOUT = "/rest-auth/logout";
const CONTENT = "/content";

export function createCookie(name: string, value:string, days:number = 0) {
    let expires = "";
    if (days > 0) {
        let date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toUTCString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

export function readCookie(name: string): string {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return "";
}

export function delete_cookie( name: string ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export default class MediaAPIClient {

    getUsers = () => this.fetchApi(USERS);
    login = async (formDetails: object) => {
      const obj = await this.fetchApi(LOGIN,"POST", formDetails, false) as any;
      console.log(obj);
        if (obj.hasOwnProperty('key')) {
            createCookie("csrftoken", "adasdsadasdas");
            return 1;
        }
        return 0;
    };

    logout = () => {
        delete_cookie("csrftoken");
        this.fetchApi(LOGOUT, "POST");
    };
    getContent = () => this.fetchApi(CONTENT);

    fetchApi = async (url: string, method = "GET", data = {}, json = true) => {
        const bodyData = method === "GET" ? "" : JSON.stringify(data);
        const apiUrl = json ? APIURL+url+"/.json" : APIURL+url;
        console.log(method);
        const obj = await fetch(apiUrl, {
            method: method,
            credentials: "same-origin",
            headers: {
                "X-CSRFTOKEN": readCookie("csrftoken"),
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: bodyData
        }).then(function(response) {
            return response.json();
        }).catch(function(ex) {
            console.log("parsing failed", ex);
        });
        return obj;
    }
}
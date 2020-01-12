import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

const GenreListIcons: React.FC = (props: any) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
            getGenres();
    }, [props.token]);

    const getGenres = async () => {
        let headers = {"Content-Type": "application/json"} as any;
        const {token} = props;
        console.log(token);
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        return await fetch("http://127.0.0.1:8000/api/v1/content/genre", {headers,})
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
                console.log(res);
                setGenres(res.data.results);
            })
    };

    if (genres.length === 0) return null;

    const genreList = genres.map((element: any) => {
        console.log(element);
        return (
            <li key={element.id}>
                <img src={"images/genres/"+element.name.toLowerCase()+".png"} alt={element.name}/>
                <h6>{element.name}</h6>
            </li>
        );
    });

    return (
        <>
        <ul className="dashboard-genres-pro">
            {genreList}
        </ul>
        <p>asdasdsadsa</p>
            </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        token: state.auth.token
    };
};

export default connect(mapStateToProps, null)(GenreListIcons);
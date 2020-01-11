import React from "react";
import {connect} from "react-redux";

const GenreListIcons: React.FC = (props: any) => {
    const getGenres = async () => {
        let headers = {"Content-Type": "application/json"} as any;
        const {token} = props;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        return await fetch("http://127.0.0.1:8000/api/v1/content/genre", {headers, })
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
                return res.data;
            })
    };

    const genreList = getGenres().then(data => {
            console.log(data);
        }
    );

    return (
        <ul className="dashboard-genres-pro">
            <li>
                <img src="images/genres/drama.png" alt="Drama"/>
                <h6>Drama</h6>
            </li>
            <li className="active">
                <img src="images/genres/comedy.png" alt="Comedy"/>
                <h6>Comedy</h6>
            </li>
            <li>
                <img src="images/genres/action.png" alt="Action"/>
                <h6>Action</h6>
            </li>
            <li>
                <img src="images/genres/romance.png" alt="Romance"/>
                <h6>Romance</h6>
            </li>
            <li>
                <img src="images/genres/horror.png" alt="Horror"/>
                <h6>Horror</h6>
            </li>
            <li>
                <img src="images/genres/fantasy.png" alt="Fantasy"/>
                <h6>Fantasy</h6>
            </li>
            <li>
                <img src="images/genres/sci-fi.png" alt="Sci-Fi"/>
                <h6>Sci-Fi</h6>
            </li>
            <li>
                <img src="images/genres/thriller.png" alt="Thriller"/>
                <h6>Thriller</h6>
            </li>
            <li>
                <img src="images/genres/western.png" alt="Western"/>
                <h6>Western</h6>
            </li>
            <li>
                <img src="images/genres/adventure.png" alt="Adventure"/>
                <h6>Adventure</h6>
            </li>
            <li>
                <img src="images/genres/animation.png" alt="Animation"/>
                <h6>Animation</h6>
            </li>
            <li>
                <img src="images/genres/documentary.png" alt="Documentary"/>
                <h6>Documentary</h6>
            </li>
        </ul>
    );
}

const mapStateToProps = (state:any) => {
    return {
        token: state.auth.token
    };
};

export default connect(mapStateToProps, null)(GenreListIcons);
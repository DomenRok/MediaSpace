import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import {Footer} from "../Components/Footer";
import MovieProfileComponent from "../Components/MovieProfileComponent";
import MovieProfileSidebar from "../Components/MovieProfileSidebar";
import MovieProfilePlayer from "../Components/MovieProfilePlayer";
import MovieProfileRating from "../Components/MovieProfileRating";
import MovieProfileDashboard from "../Components/MovieProfileDashboard";
import {movies} from "../actions";
import {connect} from "react-redux";

interface MovieState {
    title: string,
    description: string,
    link: string,
    id: number,
    genre: number,
    imdb_id: number,
    thumbnail_url: string
}

const MovieProfile: React.FC = (props: any) => {
    const [movieInfo, setMovieInfo] = useState<MovieState | undefined>(undefined);
    const {match: {params}} = props;

    useEffect(() => {
        if (props.token) {
            let headers = {"Content-Type": "application/json"} as any;
            let {token} = props;
            if (token) {
                headers["Authorization"] = `Token ${token}`;
            }
            fetch("http://localhost:8000/api/v1/content/movie/" + params.id, {headers,})
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
                        setMovieInfo(res.data);
                    } else if (res.status === 401 || res.status === 403) {
                        throw new Error("Error: " + res.data);
                    }
                });
        }
    }, [props.token, params.id]);
    if (typeof movieInfo === 'undefined') return null;
    return (
        <div id="sidebar-bg">
            <Header {...props}/>
            <MovieProfileSidebar movieinfo={movieInfo}/>
            <main id="col-main-with-sidebar">
                <MovieProfilePlayer movieinfo={movieInfo}/>
                <MovieProfileRating movieinfo={movieInfo}/>
                <MovieProfileDashboard movieinfo={movieInfo}/>
                <Footer {...props}/>
            </main>

        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        token: state.auth.token,
        user: state.auth.user,
        genres: state.movies.genres
    };
};

export default connect(mapStateToProps, null)(MovieProfile)
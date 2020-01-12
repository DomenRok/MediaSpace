import React, {ReactEventHandler, ReactHTML, useEffect, useState} from "react";
import Header from "../Components/Header";
import {DashBoardSlider, Slider} from "../Components/DashBoardSlider";
import {HomeRow} from "../Components/HomeRow";
import {Footer} from "../Components/Footer";
import Modal from "../Components/Modal";
import {Redirect} from "react-router";
import GenreListIcons from "../Components/GenreListIcons";
import {movies} from "../actions";
import {connect} from "react-redux";
import ListMovies from "../Components/ListMovies";
import {Link} from "react-router-dom";

const Dashboard: React.FC = (props: any) => {
    const [recommended, setRecommended] = useState({results: []});
    const [movieLists, setMovieLists] = useState([]);

    useEffect(() => {
        props.getGenres();
        props.fetchMovies();
    }, []);

    useEffect(() => {
        if (props.movies !== movieLists) setMovieLists(movieLists.concat(props.movies));
        if (props.user) {
            let headers = {"Content-Type": "application/json"} as any;
            let {token} = props;
            if (token) {
                headers["Authorization"] = `Token ${token}`;
            }
            fetch("http://localhost:8000/api/v1/content/recommend/"+props.user, {headers, })
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
                        setRecommended(res.data);
                    } else if (res.status === 401 || res.status === 403) {
                        throw new Error("Error: "+res.data);
                    }
                });
        }
    }, [props.movies, props.user]);
    if (!props.movies || recommended.results.length === 0) return null;

    const recommendedSlider = recommended.results.slice(0,3).map((movie: any) => {
        return {
            title: movie.title,
            bgImage: movie.thumbnail_url,
            black: true,
            description: movie.description,
            genre: movie.genre,
            id: movie.id,
            video: movie.link
        }
    });

    let listMovies = movieLists.map((movies: any) => <ListMovies movieList={movies} title={"Other"}/>);
    const recommendedList = [<ListMovies movieList={recommended} title={"Recommended for you"}/>];
    listMovies = [...recommendedList, ...listMovies];

    const loadMore = (e: any) => {
        e.preventDefault();
        props.fetchMovies(props.movies.next);
    };

    return (
        <div id="sidebar-bg">
            <Header {...props}/>
            <main id="col-main">
            <DashBoardSlider slides={recommendedSlider}/>
            <GenreListIcons genreList={props.genres}/>
            <div className="clearfix"></div>
                <div className="dashboard-container">
                {listMovies}
                    <ul className="page-numbers">
                        <li>
                            <Link className="previous page-numbers" to="#!" onClick={loadMore}>
                                <i className="fas fa-chevron-down"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

const mapStateToProps = (state:any) => {
    return {
        token: state.auth.token,
        user: state.auth.user,
        genres: state.movies.genres,
        movies: state.movies.movies
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchMovies: (next = "") => {
            return dispatch(movies.fetchMovies(next));
        },
        getGenres: () => {
            return dispatch(movies.getGenres());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
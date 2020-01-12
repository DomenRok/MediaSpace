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
    useEffect(() => {
        if (props.token) {
            props.getGenres();
            props.recommend();
            props.fetchMovies();
        }
    }, [props.token]);

    if (!props.movies) return null;
    if (!props.recommended) return null;

    const recommendedSlider = props.recommended.results.slice(0, 3).map((movie: any) => {
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
    if (recommendedSlider.length !== 3) return null;

    let listMovies = props.movies.map((movies: any) => <ListMovies movieList={movies} title={"Other"}/>);
   /* const recommendedList = [<ListMovies movieList={props.recommended} title={"Recommended for you"}/>];*/
    //listMovies = [...recommendedList, ...listMovies];

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

const mapStateToProps = (state: any) => {
    return {
        token: state.auth.token,
        user: state.auth.user,
        genres: state.movies.genres,
        movies: state.movies.movies,
        recommended: state.movies.recommended
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        recommend: () => {
            return dispatch(movies.recommended());
        },
        fetchMovies: (next = "") => {
            return dispatch(movies.fetchMovies(next));
        },
        getGenres: () => {
            return dispatch(movies.getGenres());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
import React, {ReactEventHandler, ReactHTML, useEffect, useState} from "react";
import Header from "../Components/Header";
import {DashBoardSlider, Slider} from "../Components/DashBoardSlider";
import {Redirect} from "react-router";
import GenreListIcons from "../Components/GenreListIcons";
import {movies} from "../actions";
import {connect} from "react-redux";
import ListMovies from "../Components/ListMovies";
import {Link} from "react-router-dom";

const Dashboard: React.FC = (props: any) => {
    const [movieLists, setMovieLists] = useState([]);
    useEffect(() => {
        props.getGenres();
        props.fetchMovies();
    }, []);

    useEffect(() => {
        if (props.movies !== movieLists) setMovieLists(movieLists.concat(props.movies));
    }, [props.movies]);

    if (!props.movies) return null;

    const slider = {
        title: "Film",
        bgImage: "https://cdn.hipwallpaper.com/i/96/4/ecEQiJ.jpeg",
        black: false,
        description: "description movie",
        genre: "action",
        href: "efss",
        id: 15,
        video: "http://afterglowplayer.com/sandbox/v1/afterglow_local_hd.mp4"
    };
    const slider2 = {
        title: "Creed",
        bgImage: "https://wallpapersite.com/images/pages/pic_w/14567.jpg",
        black: true,
        description: "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
        genre: "drama",
        href: "neki",
        id: 16,
        video: "https://www.youtube.com/watch?v=3LPANjHlPxo"
    }
    const sliders = [slider,slider2];

    const listMovies = movieLists.map((movies: any) => {
        return <ListMovies movieList={movies}/>
    });

    const loadMore = (e: any) => {
        e.preventDefault();
        props.fetchMovies(props.movies.next);
    };

    return (
        <div id="sidebar-bg">
            <Header/>
            <main id="col-main">
            <DashBoardSlider slides={sliders}/>
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
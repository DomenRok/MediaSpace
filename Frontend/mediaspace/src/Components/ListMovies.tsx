import React from "react";
import MovieItem from "./MovieItem";
import {Link} from "react-router-dom";

interface MovieList {
    movieList: any,
    title: string
}

const ListMovies: React.FC<MovieList> = (props: MovieList) => {
    if (props.movieList === null) return null;
    const movieList = props.movieList.results.map((element: any) => {
        return (
            <MovieItem title={element.title} rating={8} id={element.id} key={element.id} image={element.thumbnail_url}/>
        );
    });

    return (
        <>
            <h4 className="heading-extra-margin-bottom">{props.title}</h4>
            <div className="row">
                {movieList}
            </div>
        </>
    );
};
export default ListMovies;
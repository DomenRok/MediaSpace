import React from "react";
import MovieItem from "./MovieItem";

interface MovieList {
    movieList: any
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
            <div className="dashboard-container">
                <h4 className="heading-extra-margin-bottom">Comedies</h4>
                <div className="row">
                {movieList}
                </div>
            </div>
        </>
    );
};
export default ListMovies;
import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import $ from "jquery";
import "jquery-asRange";
import MovieItem from "./MovieItem";
import {connect} from "react-redux";

interface MovieDetail{
	movieinfo: any
}

const MovieProfileDashboard: React.FC<MovieDetail> = (props: MovieDetail) => {
	const [similar, setSimilar] = useState([]);

	useEffect(() => {
		similarFun();
	}, [props.movieinfo.id]);

	const similarFun = () => {
		let headers = {"Content-Type": "application/json"} as any;
		let token =  localStorage.getItem("mediaspacetoken");
		if (token) {
			headers["Authorization"] = `Token ${token}`;
		}
		return fetch("http://localhost:8000/api/v1/content/similarity/"+props.movieinfo.id, {headers,})
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
					setSimilar(res.data.results);
				} else if (res.status === 401 || res.status === 403) {
					throw new Error(res.data);
				}
			});
	}
	if (!similar) return null;
	const similarMovies = similar.map((element: any) => {
		return <MovieItem title={element.title} rating={8} id={element.id} key={element.id} image={element.thumbnail_url}/>
	});
        return (
            <>
            <div className="dashboard-container">
				
				
				<div className="movie-details-section">
					<h2>Storyline</h2>
					<p>{props.movieinfo.description}</p>
                </div>

				

					
				<div className="movie-details-section">
					<h2>Similar Movies</h2>
					<div className="row">
						{similarMovies}
					</div>
				
				</div>
				
			</div>{/*<!-- close .dashboard-container -->*/}
            </>
        );

};

const mapStateToProps = (state:any) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
}
export default connect(mapStateToProps,null)(MovieProfileDashboard);
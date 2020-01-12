import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {SideBarNav} from "./SidebarNav";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import $ from "jquery";
import "jquery-asRange";
import Afterglow from "./Player/Afterglow";

interface MovieDetail{
	movieinfo: any
}

const MovieProfilePlayer: React.FC<MovieDetail> = (props: MovieDetail) => {
    useEffect(() => {
        (window as any).afterglow = new Afterglow();
        (window as any).afterglow.init();
    }, []);

    const getId = (url: string): string => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : "";
    };

 	return (
            <>
            <div id="movie-detail-header-pro" style={{backgroundImage: "url(" + props.movieinfo.thumbnail_url + ")"}}>
				
				<div className="progression-studios-slider-more-options">
					<i className="fas fa-ellipsis-h"></i>
					<ul>
						<li><a href="#!">Add to Favorites</a></li>
						<li><a href="#!">Add to Watchlist</a></li>
						<li><a href="#!">Add to Playlist</a></li>
						<li><a href="#!">Share...</a></li>
						<li><a href="#!">Write A Review</a></li>
					</ul>
				</div>
				
				<a className="movie-detail-header-play-btn afterglow" href="#VideoLightbox-1"><i className="fas fa-play"></i></a>
				
            <video id={"VideoLightbox-1"} poster={props.movieinfo.thumbnail_url} width="960" height="540"
                           data-youtube-id={getId(props.movieinfo.link)}></video>
				
				<div id="movie-detail-header-media">
					<div className="dashboard-container">
						<h5>Media</h5>						
						<div className="row">
							<div className="col-6 col-md-4 col-lg-4">
								<a className="movie-detail-media-link afterglow" href="#VideoLightbox-1">
									<div className="movie-detail-media-image">
										<img src="http://via.placeholder.com/500x300" />
										<span><i className="fas fa-play"></i></span>
										<h6>Trailer</h6>
									</div>
								</a>
							</div>
							<div className="col-6 col-md-4 col-lg-4">
								<a className="movie-detail-media-link afterglow" href="#VideoLightbox-1">
									<div className="movie-detail-media-image">
										<img src="http://via.placeholder.com/500x300" />
										<span><i className="fas fa-play"></i></span>
										<h6>Interview</h6>
									</div>
								</a>
							</div>
							<div className="col-6 col-md-4 col-lg-4">
								<a className="movie-detail-media-link" href="#!">
									<div className="movie-detail-media-image">
										<img src="http://via.placeholder.com/500x300" />
										<span><i className="fas fa-play"></i></span>
										<h6>Movie Stills</h6>
									</div>
								</a>
							</div>
						</div>{/*<!-- close .row -->*/}
					</div>{/*<!-- close .dashboard-container -->*/}
				</div>{/*<!-- close #movie-detail-header-media -->*/}
				
				<div id="movie-detail-gradient-pro"></div>
			</div>{/*<!-- close #movie-detail-header-pro -->*/}
            </>
        );

};

export default MovieProfilePlayer;
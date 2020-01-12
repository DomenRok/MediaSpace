import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {SideBarNav} from "./SidebarNav";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import $ from "jquery";
import "jquery-asRange";


const MovieProfilePlayer: React.FC = (props: any) => {

    if (props.isAuthenticated) {
        return (
            <>
            <div id="movie-detail-header-pro" className="placeholderImage">
				
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
				
	         <video id="VideoLightbox-1"  poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1" width="960" height="540">
	             <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" type="video/mp4" />
	             <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.webm" type="video/webm" />
	         </video>
				
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
    }else{
        return (
            <>
            <p>not logged in</p>
            </>
        );
    }

};

const mapStateToProps = (state:any) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}
export default connect(mapStateToProps,null)(MovieProfilePlayer);
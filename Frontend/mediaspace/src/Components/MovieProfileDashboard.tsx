import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {SideBarNav} from "./SidebarNav";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import $ from "jquery";
import "jquery-asRange";

interface MovieDetail{
	movieinfo: any
}

const MovieProfileDashboard: React.FC<MovieDetail> = (props: MovieDetail) => {

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
						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
							<div className="item-listing-container-skrn">
								<a href="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></a>
								<div className="item-listing-text-skrn">
									<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Bad Neighbors 2</a></h6>
								      <div
								        className="circle-rating-pro"
								        data-value="0.72"
								        data-animation-start-value="0.72"
								        data-size="32"
								        data-thickness="3"
								        data-fill="{
								          &quot;color&quot;: &quot;#42b740&quot;
								        }"
								        data-empty-fill="#def6de"
								        data-reverse="true"
								      ><span className="c42b740">7.2</span></div>
									</div>
								</div>
							</div>
						</div>
					
					
						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
							<div className="item-listing-container-skrn">
								<a href="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></a>
								<div className="item-listing-text-skrn">
									<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Star Wars: Rogue One</a></h6>
								      <div
								        className="circle-rating-pro"
								        data-value="0.86"
								        data-animation-start-value="0.86"
								        data-size="32"
								        data-thickness="3"
								        data-fill="{
								          &quot;color&quot;: &quot;#42b740&quot;
								        }"
								        data-empty-fill="#def6de"
								        data-reverse="true"
								      ><span className="c42b740">8.6</span></div>
									</div>
								</div>
							</div>
						</div>
					
						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
							<div className="item-listing-container-skrn">
								<a href="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></a>
								<div className="item-listing-text-skrn">
									<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">The Imitation Game</a></h6>
								      <div
								        className="circle-rating-pro"
								        data-value="0.6"
								        data-animation-start-value="0.6"
								        data-size="32"
								        data-thickness="3"
								        data-fill="{
								          &quot;color&quot;: &quot;#ff4141&quot;
								        }"
								        data-empty-fill="#ffe1e1"
								        data-reverse="true"
								      ><span className="cff4141">6.0</span></div>
									</div>
								</div>
							</div>
						</div>
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
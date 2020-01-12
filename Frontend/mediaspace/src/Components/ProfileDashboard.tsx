import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {SideBarNav} from "./SidebarNav";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import $ from "jquery";
import "jquery-asRange";


const ProfileDashboard: React.FC = (props: any) => {

    if (props.isAuthenticated) {
        return (
        <>
            <div className="dashboard-container">
				
				<ul className="dashboard-sub-menu">
					<li className="current"><a href="dashboard-profile.html">Recommended</a></li>
					<li><a href="dashboard-favorites.html">Favorites</a></li>
					<li><a href="#!">Playlists</a></li>
					<li><a href="#!">Reviews</a></li>
					<li><a href="#!">Friends</a></li>
				</ul>
				
				
				<div className="row">
					<div className="col-12 col-md-6 col-lg-6 col-xl-4">
						<div className="item-listing-container-skrn">
							<a href="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></a>
							<div className="item-listing-text-skrn">
								<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">The Wild Things Are</a></h6>
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
								<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Central Intelligence</a></h6>
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
					
					
					<div className="col-12 col-md-6 col-lg-6 col-xl-4">
						<div className="item-listing-container-skrn">
							<a href="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></a>
							<div className="item-listing-text-skrn">
								<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Zoolander No. 2</a></h6>
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
					
					
					<div className="col-12 col-md-6 col-lg-6 col-xl-4">
						<div className="item-listing-container-skrn">
							<a href="dashboard-movie-profile.html"><img src="http://via.placeholder.com/500x707" alt="Listing" /></a>
							<div className="item-listing-text-skrn">
								<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Fantastic Beasts</a></h6>
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
								<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Edge of Tomorrow</a></h6>
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
								<div className="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Allegiant</a></h6>
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
									
				</div>
				
				
				<ul className="page-numbers">
					<li><a className="previous page-numbers" href="#!"><i className="fas fa-chevron-left"></i></a></li>
					<li><span className="page-numbers current">1</span></li>
					<li><a className="page-numbers" href="#!">2</a></li>
					<li><a className="page-numbers" href="#!">3</a></li>
					<li><a className="page-numbers" href="#!">4</a></li>
					<li><a className="next page-numbers" href="#!"><i className="fas fa-chevron-right"></i></a></li>
				</ul>
				
				
				
			</div>
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
export default connect(mapStateToProps,null)(ProfileDashboard);
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

const MovieProfileSidebar: React.FC<MovieDetail> = (props: MovieDetail) => {

        return(
        <>
        <div id="content-sidebar-pro">
			
			<div id="content-sidebar-image">
				<img src={props.movieinfo.thumbnail_url} alt="Movie Poster" />
			</div>
			
			<div className="content-sidebar-section">
				<h2 className="content-sidebar-sub-header">{props.movieinfo.title}</h2>
				<ul className="progression-studios-slider-rating">
					<li>PG-13</li><li>HD</li>
				</ul>
			</div>{/*<!-- close .content-sidebar-section -->*/}
			
			<div className="content-sidebar-section">
				<h4 className="content-sidebar-sub-header">Release Date</h4>
				<div className="content-sidebar-short-description">2 October, 2017 (USA)</div>
			</div>{/*<!-- close .content-sidebar-section -->*/}
			
			<div className="content-sidebar-section">
				<h4 className="content-sidebar-sub-header">Length</h4>
				<div className="content-sidebar-short-description">2 hr 43 min</div>
			</div>{/*<!-- close .content-sidebar-section -->*/}
			
			<div className="content-sidebar-section">
				<h4 className="content-sidebar-sub-header">Director</h4>
				<div className="content-sidebar-short-description">James Wan</div>
			</div>{/*<!-- close .content-sidebar-section -->*/}

			
			
			<div className="content-sidebar-section">
				<h2 className="content-sidebar-sub-header adjusted-recent-reviews">Recent Reviews</h2>
				<ul id="sidebar-reviews-pro">
					<li>
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
						<h6>Dan Cederholm</h6>
						<div className="sidebar-review-time">October 22, 2017</div>
						<div className="spoiler-review">Contains Spoiler</div>
						<p>They don't make many Sci-Fi films these days. This was a pleasant surprise all throughout the film. I really like this film.</p>
					</li>
					<li>
				      <div
				        className="circle-rating-pro"
				        data-value="0.53"
				        data-animation-start-value="0.53"
				        data-size="32"
				        data-thickness="3"
				        data-fill="{
				          &quot;color&quot;: &quot;#ff4141&quot;
				        }"
				        data-empty-fill="#ffe1e1"
				        data-reverse="true"
				      ><span className="cff4141">5.3</span></div>
						<h6>Jeff Seid</h6>
						<div className="sidebar-review-time">October 18, 2017</div>
						<p>Coming out of the theatres following my viewing of this film, I was confused. I couldn't decide whether I liked it or not.</p>
					</li>
					<li>
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
						<h6>Christian De Guzman</h6>
						<div className="sidebar-review-time">August 26, 2017</div>
						<div className="spoiler-review">Contains Spoiler</div>
						<p>I have been a cinema lover for years, read a lot of reviews on SKRN and everywhere, and never found the right movie to write my first review. I always thought I would wait for the movie.</p>
						<p>And this is it!</p>
					</li>
					<li>
				      <div
				        className="circle-rating-pro"
				        data-value="0.9"
				        data-animation-start-value="0.9"
				        data-size="32"
				        data-thickness="3"
				        data-fill="{
				          &quot;color&quot;: &quot;#42b740&quot;
				        }"
				        data-empty-fill="#def6de"
				        data-reverse="true"
				      ><span className="c42b740">9.0</span></div>
						<h6>Jennifer Thomas</h6>
						<div className="sidebar-review-time">August 15, 2017</div>
						<p>'Oblivion’ was incredible. The visuals, the score, the acting, were all amazing. The plot is definitely one of the most original I've seen in a while</p>
					</li>
				</ul>
				<a href="#!" className="btn btn-green-pro btn-sm">See All Reviews</a>
			</div>{/*<!-- close .content-sidebar-section -->*/}
			
            </div>{/*<!-- close #content-sidebar-pro --></div>*/}
        </>
        );
};
const mapStateToProps = (state:any) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}
export default connect(mapStateToProps,null)(MovieProfileSidebar);
import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {SideBarNav} from "./SidebarNav";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import $ from "jquery";
import "jquery-asRange";

const Header: React.FC = (props: any) => {

    if (!props.isAuthenticated) {
        return (
            <header id="masthead-pro">
                <div className="container">
                    <h1>
                        <Link to="index.html"><img src="images/logo.png" alt="Logo"/></Link>
                    </h1>

                    <nav id="site-navigation-pro">
                        <ul className="sf-menu">
                            <li className="normal-item-pro current-menu-item">
                                <Link to="index.html">Home</Link>
                            </li>
                            <li className="normal-item-pro">
                                <Link to="dashboard-home.html">New Releases</Link>
                            </li>
                            <li className="normal-item-pro">
                                <Link to="signup-step1.html">Pricing Plans</Link>
                            </li>
                            <li className="normal-item-pro">
                                <Link to="faqs.html">FAQs</Link>
                            </li>
                        </ul>
                    </nav>

                    <button className="btn btn-header-pro noselect" data-toggle="modal" data-target="#LoginModal">
                        Sign In
                    </button>

                    <div id="mobile-bars-icon-pro" className="noselect"><i className="fas fa-bars"></i></div>

                    <div className="clearfix"></div>
                </div>
                {/*!-- close .container --*/}

                <nav id="mobile-navigation-pro">

                    <ul id="mobile-menu-pro">
                        <li>
                            <Link to="index.html">Home</Link>
                        </li>
                        <li>
                            <Link to="dashboard-home.html">New Releases</Link>
                            {/*<!-- Mobile Sub-Menu Example >
                        <ul>
                            <li class="normal-item-pro">
                                <a href="#!">Sub-menu item 1</a>
                            </li>
                            <li class="normal-item-pro">
                                <a href="#!">Sub-menu item 2</a>
                            </li>
                            <li class="normal-item-pro">
                                <a href="#!">Sub-menu item 3</a>
                            </li>
                        </ul>
                        < End Mobile Sub-Menu Example -->*/}
                        </li>
                        <li>
                            <Link to="signup-step1.html">Pricing Plans</Link>
                        </li>
                        <li>
                            <Link to="faqs.html">FAQs</Link>
                        </li>
                    </ul>
                    <div className="clearfix"></div>

                    <button className="btn btn-mobile-pro btn-green-pro noselect" data-toggle="modal"
                            data-target="#LoginModal">Sign In
                    </button>
                </nav>
            </header>
        );
    } else {
        // @ts-ignore
        /*$(".range-example-rating-input").asRange({
            range: true,
            limit: false,
            tip: true,
        });*/
        const clickHeadInfo = (id: string) => {
            let $this = $(id);
            if ($this.hasClass('active')) {
                $this.removeClass('active').addClass('hide');
            } else {
                $this.addClass('active');
            }
        };

        return (
            <>
            <header id="videohead-pro" className="sticky-header">
                <div style={{position: "fixed",
                    width: "100%",
                    background: "#ffffff",
                    borderBottom: "1px solid rgba(0,0,0,0.08)"}}>
                <div id="video-logo-background"><a href="dashboard-home.html"><img src="images/logo-video-layout.png"
                                                                                   alt="Logo"/></a></div>
                <div id="video-search-header">
                    <div id="search-icon-more" onClick={e => clickHeadInfo("#video-search-header")}></div>
                    <input type="text" placeholder="Search for Movies or TV Series" aria-label="Search"/>
                    <div id="video-search-header-filtering">
                        <form id="video-search-header-filtering-padding">
                            <div className="row">
                                <div className="col-sm extra-padding">
                                    <h5>Type:</h5>

                                    <div className="row">
                                        <div className="col-sm">
                                            <label className="checkbox-pro-container">Movies
                                                <input type="checkbox" checked={true} id="movies-type"/>
                                                <span className="checkmark-pro"></span>
                                            </label>

                                            <label className="checkbox-pro-container">TV Series
                                                <input type="checkbox" id="tv-type"/>
                                                <span className="checkmark-pro"></span>
                                            </label>
                                        </div>
                                        {/* close .col */}
                                        <div className="col">
                                            <label className="checkbox-pro-container">New Arrivals
                                                <input type="checkbox" id="movie-type"/>
                                                <span className="checkmark-pro"></span>
                                            </label>

                                            <label className="checkbox-pro-container">Documentary
                                                <input type="checkbox" id="documentary-type"/>
                                                <span className="checkmark-pro"></span>
                                            </label>
                                        </div>
                                        {/* close .col */}
                                    </div>
                                    {/* close .row */}

                                    <div className="dotted-dividers-pro"></div>
                                </div>
                                {/* close .col */}
                                <div className="col-sm extra-padding">
                                    <h5>Genres:</h5>
                                    <select className="custom-select">
                                        <option selected>All Genres</option>
                                        <option value="1">Action</option>
                                        <option value="2">Adventure</option>
                                        <option value="3">Drama</option>
                                        <option value="4">Animation</option>
                                        <option value="5">Documentary</option>
                                        <option value="6">Drama</option>
                                        <option value="7">Horror</option>
                                        <option value="8">Thriller</option>
                                        <option value="9">Fantasy</option>
                                        <option value="10">Romance</option>
                                        <option value="11">Sci-Fi</option>
                                        <option value="12">Western</option>
                                    </select>
                                    <div className="dotted-dividers-pro"></div>
                                </div>
                                {/* close .col */}
                                <div className="col-sm extra-padding">
                                    <h5>Country:</h5>
                                    <select className="custom-select">
                                        <option selected>All Countries</option>
                                        <option value="1">Argentina</option>
                                        <option value="2">Australia</option>
                                        <option value="3">Bahamas</option>
                                        <option value="4">Belgium</option>
                                        <option value="5">Brazil</option>
                                        <option value="6">Canada</option>
                                        <option value="7">Chile</option>
                                        <option value="8">China</option>
                                        <option value="9">Denmark</option>
                                        <option value="10">Ecuador</option>
                                        <option value="11">France</option>
                                        <option value="12">Germany</option>
                                        <option value="13">Greece</option>
                                        <option value="14">Guatemala</option>
                                        <option value="15">Italy</option>
                                        <option value="16">Japan</option>
                                        <option value="17">asdfasdf</option>
                                        <option value="18">Korea</option>
                                        <option value="19">Malaysia</option>
                                        <option value="20">Monaco</option>
                                        <option value="21">Morocco</option>
                                        <option value="22">New Zealand</option>
                                        <option value="23">Panama</option>
                                        <option value="24">Portugal</option>
                                        <option value="25">Russia</option>
                                        <option value="26">United Kingdom</option>
                                        <option value="27">United States</option>
                                    </select>
                                    <div className="dotted-dividers-pro"></div>
                                </div>
                                {/* close .col */}
                                <div className="col-sm extra-padding extra-range-padding">
                                    <h5>Average Rating:</h5>
                                    <input className="range-example-rating-input" type="text" min="0" max="10"
                                           value="4,10" step="1"/>
                                    {/* JS is under /js/script.jss */}
                                </div>
                                {/* close .col */}
                            </div>
                            {/* close .row */}
                            <div id="video-search-header-buttons">
                                <a href="#!" className="btn btn-green-pro">Filter Search</a>
                                <a href="#!" className="btn">Reset</a>
                            </div>
                            {/* close #video-search-header-buttons */}
                        </form>
                        {/* #video-search-header-filtering-padding */}
                    </div>
                    {/* close #video-search-header-filtering */}
                </div>
                {/* close .video-search-header */}

                <div id="mobile-bars-icon-pro" className="noselect"><i className="fas fa-bars"></i></div>
                <div id="header-user-profile" onClick={(e) => clickHeadInfo("#header-user-profile")}>
                    <div id="header-user-profile-click" className="noselect">
                        <img src="images/demo/user-profile.jpg" alt="Suzie"/>
                        <div id="header-username">Suzie Smith</div>
                        <i className="fas fa-angle-down"></i>
                    </div>
                    {/* close #header-user-profile-click */}
                    <div id="header-user-profile-menu">
                        <ul>
                            <li><a href="dashboard-profile.html"><span className="icon-User"></span>My Profile</a></li>
                            <li><a href="dashboard-favorites.html"><span className="icon-Favorite-Window"></span>My
                                Favorites</a></li>
                            <li><a href="dashboard-account.html"><span className="icon-Gears"></span>Account Details</a>
                            </li>
                            <li><a href="#!"><span className="icon-Life-Safer"></span>Help/Support</a></li>
                            <li><a href="/" onClick={logout}><span className="icon-Power-3"></span>Log Out</a></li>
                        </ul>
                    </div>
                    {/* close #header-user-profile-menu */}
                </div>
                {/* close #header-user-profile */}

                <div id="header-user-notification" onClick={(e) => clickHeadInfo("#header-user-notification")}>
                    <div id="header-user-notification-click" className="noselect">
                        <i className="far fa-bell"></i>
                        <span className="user-notification-count">3</span>
                    </div>
                    {/* close #header-user-profile-click */}
                    <div id="header-user-notification-menu">
                        <h3>Notifications</h3>
                        <div id="header-notification-menu-padding">
                            <ul id="header-user-notification-list">
                                <li><a href="#!"><img src="images/demo/user-profile-2.jpg" alt="Profile"/>Lorem ipsum
                                    dolor sit amet, consec tetur adipiscing elit. <div
                                        className="header-user-notify-time">21 hours ago</div></a></li>
                                <li><a href="#!"><img src="images/demo/user-profile-3.jpg" alt="Profile"/>Donec vitae
                                    lacus id arcu molestie mollis. <div className="header-user-notify-time">3 days
                                        ago</div></a></li>
                                <li><a href="#!"><img src="images/demo/user-profile-4.jpg" alt="Profile"/>Aenean vitae
                                    lectus non purus facilisis imperdiet. <div className="header-user-notify-time">5
                                        days ago</div></a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                        {/* close #header-user-profile-menu */}
                    </div>
                </div>
                {/* close #header-user-notification */}


                <div className="clearfix"></div>

                <nav id="mobile-navigation-pro">

                    <ul id="mobile-menu-pro">
                        <li className="current-menu-item">
                            <a href="dashboard-home.html">
                                <span className="icon-Old-TV"></span>
                                TV Series
                            </a>
                        </li>
                        <li>
                            <a href="dashboard-movies.html">
                                <span className="icon-Reel"></span>
                                Movies
                            </a>
                        </li>
                        <li>
                            <a href="dashboard-playlists.html">
                                <span className="icon-Movie"></span>
                                Playlists
                            </a>
                        </li>
                        <li>
                            <a href="dashboard-new-arrivals.html">
                                <span className="icon-Movie-Ticket"></span>
                                New Arrivals
                            </a>
                        </li>
                        <li>
                            <a href="dashboard-coming-soon.html">
                                <span className="icon-Clock"></span>
                                Coming Soon
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="far fa-bell"></i>
                                <span className="user-notification-count">3</span>
                                Notifications
                            </a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>

                    <div id="search-mobile-nav-pro">
                        <input type="text" placeholder="Search for Movies or TV Series" aria-label="Search"/>
                    </div>

                </nav>
                </div>
            </header>
            <SideBarNav/>
            </>
        );
    }
};
const mapStateToProps = (state:any) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}
export default connect(mapStateToProps,null)(Header);
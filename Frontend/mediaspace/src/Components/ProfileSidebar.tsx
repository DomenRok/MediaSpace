import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {SideBarNav} from "./SidebarNav";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import $ from "jquery";
import "jquery-asRange";


const ProfileSidebar: React.FC = (props: any) => {

    if (props.isAuthenticated) {
        return (
            <>
            <div id="content-sidebar-pro">
			
			<div id="content-sidebar-info">
				<img src="http://via.placeholder.com/400x498" alt="Suzie" />
				<div id="profile-sidebar-name">
					<h5>Suzie Smith</h5>
					<h6>Manila, Philippines</h6>
				</div>
				<div id="profile-sidebar-gradient"></div>
				<a href="dashboard-account.html" className="edit-profile-sidebar"><i className="fas fa-pencil-alt"></i></a>
			</div>
			
			<div className="content-sidebar-section">
				<h3 className="content-sidebar-sub-header">Watched</h3>
				<ul id="profile-watched-stats">
					<li><span>43</span> Movies</li>
					<li><span>28</span> Series</li>
					<li><span>07</span> Docs</li>
				</ul>
			</div>
			
			<div className="content-sidebar-section">
				<h3 className="content-sidebar-sub-header">Favorite Genres</h3>
				<ul id="profile-favorite-genres">
					<li>
						<img src="images/genres/comedy.png" alt="Comedy" />
					</li>
					<li>
						<img src="images/genres/action.png" alt="Action" />
					</li>
					<li>
						<img src="images/genres/romance.png" alt="Romance" />
					</li>
					<li>
						<img src="images/genres/fantasy.png" alt="Fantasy" />
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
			
			<div className="content-sidebar-section">
				<h3 className="content-sidebar-sub-header">Friends: 87</h3>
				<ul id="friends-activity-profiles">
					<li><a href="#!"><img src="images/demo/user-8.jpg" alt="Friend"/></a></li>
					<li><a href="#!"><img src="images/demo/user-9.jpg" alt="Friend"/></a></li>
					<li><a href="#!"><img src="images/demo/user-10.jpg" alt="Friend"/></a></li>
					<li><a href="#!"><img src="images/demo/user-11.jpg" alt="Friend"/></a></li>
					<li className="friends-activity-profiles-more"><a href="#!">+83</a></li>
				</ul>
				<div className="clearfix"></div>
			</div>
			
			<div className="content-sidebar-section">
				<h3 className="content-sidebar-sub-header">Friends Activity</h3>
				<ul id="friends-activity-feed">
					<li><img src="images/demo/user-15.jpg" alt="Friend" />Added <a href="#!">Interstellar</a> to her Favorite Playlist</li>
					<li><img src="images/demo/user-8.jpg" alt="Friend" />Wants to Watch <a href="#!">The Imitation Game</a></li>
					<li><img src="images/demo/user-9.jpg" alt="Friend" />Added <a href="#!">Moonlight</a> to his <a href="#!">Playlist Best Dramas</a></li>
					<li><img src="images/demo/user-4.jpg" alt="Friend" />Watched <a href="#!">Transformers: The Last Knight</a></li>
				</ul>
				<div className="clearfix"></div>
			</div>
			
			
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
export default connect(mapStateToProps,null)(ProfileSidebar);
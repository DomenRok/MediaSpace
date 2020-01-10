import React from "react";
import {Link} from 'react-router-dom';


export const SideBarNav: React.FC = (props) => {
    return (
        <nav id="sidebar-nav">
            <ul id="vertical-sidebar-nav" className="sf-menu">
                <li className="normal-item-pro current-menu-item">
                    <Link to="dashboard-home.html">
                        <span className="icon-Old-TV"></span>
                        TV Series
                    </Link>
                </li>
                <li className="normal-item-pro">
                    <Link to="dashboard-movies.html">
                        <span className="icon-Reel"></span>
                        Movies
                    </Link>
                </li>
                <li className="normal-item-pro">
                    <Link to="dashboard-playlists.html">
                        <span className="icon-Movie"></span>
                        Playlists
                    </Link>
                </li>
                <li className="normal-item-pro">
                    <Link to="dashboard-new-arrivals.html">
                        <span className="icon-Movie-Ticket"></span>
                        New Arrivals
                    </Link>
                </li>
                <li className="normal-item-pro">
                    <Link to="dashboard-coming-soon.html">
                        <span className="icon-Clock"></span>
                        Coming Soon
                    </Link>
                </li>
            </ul>
            <div className="clearfix"></div>
        </nav>
    );
}
import React from "react";
import {Link} from 'react-router-dom';
interface Props {
    loggedIn: boolean
}
const Header: React.FC<Props> = (props) => {
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
                            {/*<!-- Sub-Menu Example >
                            <ul class="sub-menu">
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
                            < End Sub-Menu example -->*/}
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
};

export default Header;
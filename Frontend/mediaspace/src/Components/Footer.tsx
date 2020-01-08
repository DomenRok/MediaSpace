import React from "react";

interface Props {
    loggedIn: boolean,
}

export const Footer: React.FC<Props> = (props) => {
    return (
        <>
        <footer id="footer-pro">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="copyright-text-pro">&copy; Copyright 2020 MediaSpace. All Rights Reserved</div>
                    </div>
                    <div className="col-md">
                        <ul className="social-icons-pro">
                            <li className="facebook-color"><a href="http://facebook.com/progressionstudios"
                                                              target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-facebook-f"></i></a></li>
                            <li className="twitter-color"><a href="http://twitter.com/Progression_S" target="_blank"
                                                             rel="noopener noreferrer"><i
                                className="fab fa-twitter"></i></a></li>
                            <li className="youtube-color"><a href="http://youtube.com" target="_blank"
                                                             rel="noopener noreferrer"><i
                                className="fab fa-youtube"></i></a></li>
                            <li className="vimeo-color"><a href="http://vimeo.com" target="_blank"
                                                           rel="noopener noreferrer"><i className="fab fa-vimeo-v"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <a href="#0" id="pro-scroll-top"><i className="fas fa-chevron-up"></i></a>
        </>
    )
}
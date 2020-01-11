import React from "react";

export const HomeRow = () => {

    const style = {
        backgroundImage: 'url(http://via.placeholder.com/1920x693)',
        backgroundColor: '#111015'
    };

    return (
        <div id="content-pro">
            <div className="container">
                <div className="row">
                    <div className="col-md my-auto">
                        <img src="images/mobile_logo_photo.png" className="img-fluid" alt="Watch in Any Devices"/>
                    </div>
                    <div className="col-md my-auto">
                        <h2 className="short-border-bottom">Watch On Any Device</h2>
                        <p>You can watch your favourite movies or TV shows anywhere, on any device you want. Mediaspace
                            is not platform dependant and works on all sorts of devices ranging from phones, tablets,
                            TVs to computers.</p>
                        <div style={{height: '15px'}}></div>
                        <p><a className="btn btn-green-pro" href="signup-step1.html" role="button">Learn More</a></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md my-auto">
                        <h2 className="short-border-bottom">Make Your Own Playlist</h2>
                        <p>Mediaspace makes it easy for you to make your own personalized playlists that you can share
                            with your friends. Pick up your device and start watching movies or listening to music
                            where you left off. </p>
                        <div style={{height: '15px'}}></div>
                        <p><a className="btn btn-green-pro" href="signup-step1.html" role="button">Start Watching</a>
                        </p>
                    </div>
                    <div className="col-md my-auto">
                        <img src="images/playlist_photo.png" className="img-fluid"
                             alt="Make Your Own Playlist"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md my-auto">
                        <img src="https://cdn.vizio.com/images/product-pages/Eseries/2017/e_series_hd_uhd_2017.jpg" className="img-fluid" alt="Watch in Ultra HD"/>
                    </div>
                    <div className="col-md my-auto">
                        <h2 className="short-border-bottom">Watch in Ultra HD</h2>
                        <p>With our excelent streaming service you can watch movies and TV shows in qualities up to UHD
                            without any lag or quality loss.</p>
                        <div style={{height: '15px'}}></div>
                        <p><a className="btn btn-green-pro" href="signup-step1.html" role="button">Start Your Free
                            Trial</a></p>
                    </div>
                </div>
                <div style={{height: '35px'}}></div>
                <div className="clearfix"></div>
            </div>
            <hr/>
                <div className="progression-pricing-section-background">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto">
                                <div style={{height: '70px'}}></div>
                                <h2 className="short-border-bottom">Our Plans &amp; Pricing</h2>
                            </div>
                        </div>
                        <div style={{height: '25px'}}></div>
                        <div className="row">
                            <div className="col-md">
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fad fa-check"></i></span>1 mmonth unlimited access!</li>
                                    <li><span className="fa-li"><i className="fad fa-check"></i></span>Thousands of TV shows, movies &amp; more.</li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fad fa-check"></i></span>Stream on your phone, laptop, tablet or TV.</li>
                                    <li><span className="fa-li"><i className="fad fa-check"></i></span>You can even Download & watch offline.</li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fad fa-check"></i></span>1 month unlimited access!</li>
                                    <li><span className="fa-li"><i className="fad fa-check"></i></span>Thousands of TV shows, movies &amp; more.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pricing-table-pro">
                            <div className="row">
                                <div className="col-md">
                                    <div className="pricing-table-col">
                                        <h6>FREE TRIAL</h6>
                                        <h2>Free</h2>
                                        <ul>
                                            <li>720p Available</li>
                                            <li>Watch on any Device</li>
                                            <li>20 Movies and Shows</li>
                                            <li>Download Available</li>
                                        </ul>
                                        <p><a className="btn" href="signup-step2.html" role="button">Choose Plan</a></p>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pricing-table-col pricing-table-col-shadow-pro">
                                        <h6>STARTER</h6>
                                        <h2><sup>$</sup>10<span> / month</span></h2>
                                        <ul>
                                            <li>HD Available</li>
                                            <li>Watch on any Device</li>
                                            <li>70 Movies and Shows</li>
                                            <li>Download Available</li>
                                        </ul>
                                        <p><a className="btn btn-green-pro" href="signup-step2.html" role="button">Choose
                                            Plan</a></p>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pricing-table-col">
                                        <h6>PREMIUM</h6>
                                        <h2><sup>$</sup>14<span> / month</span></h2>
                                        <ul>
                                            <li>Ultra HD Available</li>
                                            <li>Watch on any Device</li>
                                            <li>Unlimited Movies and Shows</li>
                                            <li>Download Available</li>
                                        </ul>
                                        <p><a className="btn" href="signup-step2.html" role="button">Choose Plan</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
        </div>
);
};
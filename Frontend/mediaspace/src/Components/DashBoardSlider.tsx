import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Afterglow from "./Player/Afterglow";

export interface Slider {
    id: Number;
    title: string;
    description: string;
    video: string;
    href: string;
    bgImage: string;
    genre: string;
    black: boolean;
}

interface Props {
    slides: Array<Slider>; // we can have arbitry number of slides
}

export const DashBoardSlider = (props: Props) => {
    useEffect(() => {
        (window as any).afterglow = new Afterglow();
        (window as any).afterglow.init();
        document.addEventListener("DOMContentLoaded", function() {
            (window as any).afterglow.init();
        });
        $('.progression-studios-dashboard-slider').flexslider({
            slideshow: false,  		/* Autoplay True/False */
            slideshowSpeed: 8000,	/* Autoplay Speed */
            animation: "fade",		/* Slideshow Transition Animation */
            animationSpeed: 800, 	/* Slide Transition Speed */
            directionNav: true,		/* Left/Right Navigation True/False */
            controlNav: true,		/* Bullet Navigaion True/False */
            prevText: "",
            nextText: "",
        });
        $(".progression-studios-slider-more-options").hover(function() {
            var $this = $(".progression-studios-slider-more-options");
            if ($this.hasClass('active')) {
                $this.removeClass('active').addClass('hide');
            } else {
                $this.addClass('active');
            }
        });
    }, []);
    const style = {
        backgroundImage: 'url(http://i3.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg)',
        backgroundColor: '#111015'
    };

    const supportedExt = new Set(['mp4', 'webm']);

    const getId = (url: string): string => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : "";
    };

    const videoPlayer = (slide: Slider) => {
        if (supportedExt.has(slide.video.split('.').pop() as string)) {
            return (<>
                <a className="progression-studios-slider-play-btn afterglow"
                   href={"#VideoLightbox-" + slide.id}><i
                    className="fas fa-play"></i></a>
                <video id={"VideoLightbox-" + slide.id}
                       poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1" width="960"
                       height="540">
                    <source src={slide.video} type="video/mp4"/>
                </video>
                </>
            )
        } else {
            if (slide.video.includes("youtube")) {
                return (<>
                    <a className="progression-studios-slider-play-btn afterglow"
                       href={"#VideoLightbox-" + slide.id}><i
                        className="fas fa-play"></i></a>
                    <video id={"VideoLightbox-" + slide.id} width="960" height="540"
                           data-youtube-id={getId(slide.video)}></video>
                    </>
                )
            }
        }
    };

    const slides = props.slides.map((slide) => {
        let tempStyle = {...style};
        tempStyle.backgroundImage = 'url(' + slide.bgImage + ')';
        return (<li className="progression_studios_animate_left" key={slide.href}>
            <div className="progression-studios-slider-dashboard-image-background"
                 style={tempStyle}>
                <div className="progression-studios-slider-display-table">
                    <div className="progression-studios-slider-vertical-align">
                        <div className="container">
                            {videoPlayer(slide)}
                            <div
                                className="circle-rating-pro"
                                data-value="0.86"
                                data-animation-start-value="0.86"
                                data-size="70"
                                data-thickness="6"
                                data-fill="{
								          &quot;color&quot;: &quot;#42b740&quot;
								        }"
                                data-empty-fill="#def6de"
                                data-reverse="true"
                            ><span style={{color: "#42b740;"}}>8.6</span></div>
                            <div className="progression-studios-slider-dashboard-caption-width">
                                <div className="progression-studios-slider-caption-align">
                                    <h6>Movie</h6>
                                    <ul className="progression-studios-slider-rating">
                                        <li>PG-13</li>
                                        <li>HD</li>
                                    </ul>
                                    <h2><Link to="dashboard-movie-profile.html">{slide.title}</Link></h2>
                                    <ul className="progression-studios-slider-meta">
                                        <li>Documentary</li>
                                    </ul>
                                    <p className="progression-studios-slider-description">{slide.description}</p>

                                    <a className="btn btn-green-pro btn-slider-pro btn-shadow-pro afterglow"
                                       href={"#VideoLightbox-" + slide.id}><i className="fas fa-play"></i> Watch Trailer</a>

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
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progression-studios-slider-mobile-background-cover"></div>
            </div>
        </li>
        )
    });

    return (
        <>
        <div className="flexslider progression-studios-dashboard-slider">
            <ul className="slides">
                {slides}
            </ul>
        </div>
        <ul className="dashboard-genres-pro">
        <li>
        <img src="images/genres/drama.png" alt="Drama"/>
        <h6>Drama</h6>
        </li>
        <li className="active">
        <img src="images/genres/comedy.png" alt="Comedy"/>
        <h6>Comedy</h6>
        </li>
        <li>
        <img src="images/genres/action.png" alt="Action"/>
        <h6>Action</h6>
        </li>
        <li>
        <img src="images/genres/romance.png" alt="Romance"/>
        <h6>Romance</h6>
        </li>
        <li>
        <img src="images/genres/horror.png" alt="Horror"/>
        <h6>Horror</h6>
        </li>
        <li>
        <img src="images/genres/fantasy.png" alt="Fantasy"/>
        <h6>Fantasy</h6>
        </li>
        <li>
        <img src="images/genres/sci-fi.png" alt="Sci-Fi"/>
        <h6>Sci-Fi</h6>
        </li>
        <li>
        <img src="images/genres/thriller.png" alt="Thriller"/>
        <h6>Thriller</h6>
        </li>
        <li>
        <img src="images/genres/western.png" alt="Western"/>
        <h6>Western</h6>
        </li>
        <li>
        <img src="images/genres/adventure.png" alt="Adventure"/>
        <h6>Adventure</h6>
        </li>
        <li>
        <img src="images/genres/animation.png" alt="Animation"/>
        <h6>Animation</h6>
        </li>
        <li>
        <img src="images/genres/documentary.png" alt="Documentary"/>
        <h6>Documentary</h6>
        </li>
        </ul>
            </>
    );
}
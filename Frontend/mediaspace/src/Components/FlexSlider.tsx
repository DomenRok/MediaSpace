import React from "react";

interface Slider {
    heading: string;
    caption: string;
    button: string;
    href: string;
    bgImage: string;
    black: boolean;
}

interface Props {
    slides: Array<Slider>; // we can have arbitry number of slides
}

export const FlexSlider = (props: Props) => {
    const style = {
        backgroundImage: 'url(http://i3.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg)',
        backgroundColor: '#111015'
    };

    const slides = props.slides.map((slide) => {
        let tempStyle = {...style};
        tempStyle.backgroundImage =  'url('+slide.bgImage+')';
        return (<li className="progression_studios_animate_in" key={slide.href}>
            <div className="progression-studios-slider-image-background"
                 style={tempStyle}>
                <div className="progression-studios-slider-display-table">
                    <div className="progression-studios-slider-vertical-align">
                        <div className="container">
                            <div className="progression-studios-slider-caption-width">
                                <div className="progression-studios-slider-caption-align">
                                    <h2 className={(slide.black || '') && "light-fonts-pro"}>{slide.heading}</h2>
                                    <h6 className={(slide.black || '') && "light-fonts-pro"}>{slide.caption}</h6>
                                    <a className="btn btn-green-pro btn-slider-pro btn-shadow-pro"
                                       href="signup-step1.html" role="button">{slide.button}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progression-studios-slider-mobile-background-cover"></div>
            </div>
        </li>)
    });

    return (
        <div className="flexslider progression-studios-slider">
            <ul className="slides">
                {slides}
            </ul>
        </div>
    );
}
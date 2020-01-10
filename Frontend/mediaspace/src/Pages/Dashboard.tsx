import React from "react";
import Header from "../Components/Header";
import {FlexSlider, Slider} from "../Components/DashBoardSlider";
import {HomeRow} from "../Components/HomeRow";
import {Footer} from "../Components/Footer";
import {Modal} from "../Components/Modal";


export const Dashboard: React.FC = (props) => {
    const slider = {
        title: "Film",
        bgImage: "https://cdn.hipwallpaper.com/i/96/4/ecEQiJ.jpeg",
        black: false,
        description: "description movie",
        genre: "action",
        href: "efss",
        id: 15,
        video: "https://www.youtube.com/watch?v=_X--xYexBdI"
    } as Slider;
    var sliders = [slider];
    return (
        <div id="sidebar-bg">
            <Header loggedIn={true}/>
            <FlexSlider slides={sliders}/>
        </div>
    );
}
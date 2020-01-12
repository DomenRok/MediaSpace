import React from "react";
import Header from "../Components/Header";
import {DashBoardSlider, Slider} from "../Components/DashBoardSlider";
import {Redirect} from "react-router";
interface Props {
    loggedIn: boolean
}

export const Dashboard: React.FC<Props> = (props) => {
    const slider = {
        title: "Film",
        bgImage: "https://cdn.hipwallpaper.com/i/96/4/ecEQiJ.jpeg",
        black: false,
        description: "description movie",
        genre: "action",
        href: "efss",
        id: 15,
        video: "http://afterglowplayer.com/sandbox/v1/afterglow_local_hd.mp4"
    };
    const slider2 = {
        title: "Creed",
        bgImage: "https://wallpapersite.com/images/pages/pic_w/14567.jpg",
        black: true,
        description: "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
        genre: "drama",
        href: "neki",
        id: 16,
        video: "https://www.youtube.com/watch?v=3LPANjHlPxo"
    }
    var sliders = [slider,slider2];

    return (
        <div id="sidebar-bg">
            <Header/>
            <main id="col-main">
            <DashBoardSlider slides={sliders}/>
            </main>
        </div>
    );
}
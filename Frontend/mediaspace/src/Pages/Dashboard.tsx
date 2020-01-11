import React from "react";
import Header from "../Components/Header";
import {DashBoardSlider, Slider} from "../Components/DashBoardSlider";
import {Redirect} from "react-router";
interface Props {
    loggedIn: boolean
}

export const Dashboard: React.FC<Props> = (props) => {
    if (!props.loggedIn) {
        return <Redirect to="/"/>
    }
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
    var sliders = [slider];

    return (
        <div id="sidebar-bg">
            <Header loggedIn={props.loggedIn}/>
            <main id="col-main">
            <DashBoardSlider slides={sliders}/>
            </main>
        </div>
    );
}
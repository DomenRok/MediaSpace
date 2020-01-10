import React from "react";
import Header from "../Components/Header";
import {DashBoardSlider, Slider} from "../Components/DashBoardSlider";
import {HomeRow} from "../Components/HomeRow";
import {Footer} from "../Components/Footer";
import {Modal} from "../Components/Modal";
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
        video: "https://www.youtube.com/watch?v=_X--xYexBdI"
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
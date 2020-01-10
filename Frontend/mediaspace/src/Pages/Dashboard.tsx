import React from "react";
import Header from "../Components/Header";
import {FlexSlider,Slider} from "../Components/DashBoardSlider";
import {HomeRow} from "../Components/HomeRow";
import {Footer} from "../Components/Footer";
import {Modal} from "../Components/Modal";


interface Props {
    loggedIn: boolean
}

export const Dashboard: React.FC<Props> = (props) => {
    const slider = {title: "Film", bgImage:"https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687", black: false, description:"description movie", genre:"action", href:"efss", id:15, video:"https://www.youtube.com/watch?v=_X--xYexBdI"} as Slider;
    var sliders = [slider];
    return(
        <div id={props.loggedIn ? "sidebar-bg" : ""}>
            <Header loggedIn={props.loggedIn}/>
            <FlexSlider slides={sliders}/>
        </div>
    );
}
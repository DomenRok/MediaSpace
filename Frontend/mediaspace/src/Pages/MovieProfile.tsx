import React from "react";
import Header from "../Components/Header";
import {DashBoardSlider, Slider} from "../Components/DashBoardSlider";
import {HomeRow} from "../Components/HomeRow";
import {Footer} from "../Components/Footer";
import MovieProfileComponent from "../Components/MovieProfileComponent";
import MovieProfileSidebar from "../Components/MovieProfileSidebar";
import MovieProfilePlayer from "../Components/MovieProfilePlayer";
import MovieProfileRating from "../Components/MovieProfileRating";
import MovieProfileDashboard from "../Components/MovieProfileDashboard";
import {Redirect} from "react-router";
interface Props {
    loggedIn: boolean
}

export const MovieProfile: React.FC<Props> = (props) => {
    if (!props.loggedIn) {
        //return <Redirect to="/"/>
    }

    return (
        <div id="sidebar-bg">
            <Header {...props}/>
            <MovieProfileSidebar />
            <main id="col-main-with-sidebar">
            <MovieProfilePlayer />
            <MovieProfileRating />
            <MovieProfileDashboard />
            <Footer {...props}/>
            </main>

        </div>
    );
}
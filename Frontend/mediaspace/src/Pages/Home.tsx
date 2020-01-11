import React, {useState} from "react";
import Header from "../Components/Header";
import {FlexSlider} from "../Components/FlexSlider";
import {HomeRow} from "../Components/HomeRow";
import {Footer} from "../Components/Footer";
import Modal from "../Components/Modal";
import { Redirect } from "react-router";

/*interface HomeProps {
    signIn: (active: boolean) => void
    loggedIn: boolean
}*/

const Home = (props: any) => {

    const slides = [{
        heading: "Welcome to MediaSpace",
        caption: "Random slide",
        button: "Try it for free",
        href: "welcome",
        bgImage: "https://skrn.progressionstudios.com/wp-content/uploads/2018/07/slide-1-landing.jpg",
        black: false
    }, {
        heading: "Free trial",
        caption: "See the most exciting movies and TV shows for free first month. Only on MediaSpace",
        button: "Watch now",
        href: "star-wars",
        bgImage: "http://ost-to-pst.org/wp-content/uploads/sites/73/2019/07/Media-managementv2_herobanner.jpg",
        black: true
    }];

    return (
        <>
        <Header/>
            <FlexSlider slides={slides}/>
            <HomeRow/>
            <Footer/>
            <Modal/>
            </>
    );
};

export default Home;
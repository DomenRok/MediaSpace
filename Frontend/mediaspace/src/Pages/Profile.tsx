import React from "react";
import Header from "../Components/Header";
import {Footer} from "../Components/Footer";
import {Redirect} from "react-router";
import ProfileSidebar from "../Components/ProfileSidebar";
import ProfileDashboard from "../Components/ProfileDashboard";
interface Props {
    loggedIn: boolean
}

export const Profile: React.FC<Props> = (props) => {
    if (props.loggedIn) {
        return (
            <>
                <main id="col-main">
                <p>not logged in</p>
                <Footer {...props}/>
                </main>
            </>
        );
    }else{
        return (
            <div id="sidebar-bg">
                <Header {...props}/>
                <ProfileSidebar />
                <main id="col-main-with-sidebar">
                    <ProfileDashboard />
                    <Footer {...props}/>
                </main>

            </div>
        );
    }
}
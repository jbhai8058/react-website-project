import React from 'react'
import { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation';
import Analysis from '../../Components/Analysis/Analysis';
import Summary from '../../Components/Summary/Summary';
import RecentProject from '../../Components/RecentProject/RecentProject';
import Course from '../../Components/Courses/Course';
import Videos from '../../Components/Videos/Videos';
import ClientReview from '../../Components/ClientReview/ClientReview';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Footer from '../../Components/Footer/Footer';
import TopBanner from '../../Components/TopBanner/TopBanner';
import Service from '../../Components/Services/Service';
import Welcome from '../../Components/Welcome/Welcome';

const HomePage = () => {

    return (
        <Fragment>
            <TopNavigation title="Code & Creativity Hub" />
            <TopBanner />
            <Welcome />
            <Service />
            <Analysis />
            <Summary />
            {/* <RecentProject /> */}
            {/* <Course /> */}
            {/* <Videos /> */}
            {/* <ClientReview /> */}
            <AboutMe />
            <Footer />
        </Fragment>
    )
}

export default HomePage

import React, { useEffect, useState } from 'react'
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
import { ColorRing } from 'react-loader-spinner';
import Welcome from '../../Components/Welcome/Welcome';

const HomePage = () => {

    const [loading, setloading] = useState(true)

    useEffect(() => {
        // simulate a 2 second loading time
        const timer = setTimeout(() => {
            setloading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Fragment>
            {
                loading ?
                    <div className='loader'>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#051b35', '#000000', '#051b35', '#000000', '#051b35']}
                            loading={loading}
                        />
                    </div>
                    :
                    <Fragment>
                        <TopNavigation title="Easy Standing" />
                        <TopBanner />
                        <Welcome />
                        <Service />
                        <Analysis />
                        <Summary />
                        <RecentProject />
                        <Course />
                        <Videos />
                        <ClientReview />
                        <AboutMe />
                        <Footer />
                    </Fragment>
            }

        </Fragment>
    )
}

export default HomePage

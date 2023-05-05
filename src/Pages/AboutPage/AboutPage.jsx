import React, { Fragment, useEffect, useState } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import AboutDescription from '../../Components/About Descripltion/AboutDescription'
import Footer from '../../Components/Footer/Footer'
import AboutMe from '../../Components/AboutMe/AboutMe'
import { ColorRing } from 'react-loader-spinner'

const AboutPage = () => {

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
                        <TopNavigation title="About Us" />
                        <PageTop pagetitle="About Us" />
                        <AboutMe />
                        <AboutDescription />
                        <Footer />
                    </Fragment>
            }
        </Fragment>
    )
}

export default AboutPage

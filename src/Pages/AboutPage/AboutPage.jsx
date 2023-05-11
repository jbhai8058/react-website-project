import React, { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import AboutDescription from '../../Components/About Descripltion/AboutDescription'
import Footer from '../../Components/Footer/Footer'
import AboutMe from '../../Components/AboutMe/AboutMe'

const AboutPage = () => {
    return (

        <Fragment>
            <TopNavigation title="About Us" />
            <PageTop pagetitle="About Us" />
            <AboutMe />
            <AboutDescription />
            <Footer />
        </Fragment>
    )
}

export default AboutPage

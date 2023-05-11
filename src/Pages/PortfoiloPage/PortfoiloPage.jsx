import React, { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import AllProjects from '../../Components/AllProjects/AllProjects'
import Footer from '../../Components/Footer/Footer'

const PortfoiloPage = () => {

    return (
        <Fragment>
            <TopNavigation title="Our Portfoilo" />
            <PageTop pagetitle="Our Portfoilo" />
            <AllProjects />
            <Footer />
        </Fragment>

    )
}

export default PortfoiloPage

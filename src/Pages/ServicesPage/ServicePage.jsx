import React, { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import Service from '../../Components/Services/Service'
import Footer from '../../Components/Footer/Footer'
import ContactSec from '../../Components/ContactSection/ContactSec'

const ServicePage = () => {
    return (

        <Fragment>
            <TopNavigation title="Our Services" />
            <PageTop pagetitle="Our Services" />
            <Service />
            <ContactSec />
            <Footer />
        </Fragment>

    )
}

export default ServicePage

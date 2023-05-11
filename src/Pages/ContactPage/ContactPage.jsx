import React from 'react'
import { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import ContactSec from '../../Components/ContactSection/ContactSec'
import Footer from '../../Components/Footer/Footer'

const ContactPage = () => {


    return (
        <Fragment>
            <TopNavigation title="Contact Us" />
            <PageTop pagetitle="Contact Us" />
            <ContactSec />
            <Footer />
        </Fragment>

    )
}

export default ContactPage

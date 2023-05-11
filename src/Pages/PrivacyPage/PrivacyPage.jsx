import React, { Fragment } from 'react'
import PrivacyDescription from '../../Components/PrivacyDescription/PrivacyDescription';
import Footer from '../../Components/Footer/Footer';
import PageTop from '../../Components/PageTop/PageTop';
import TopNavigation from '../../Components/TopNavigation/TopNavigation';

const PrivacyPage = () => {

    return (

        <Fragment>
            <TopNavigation title="Privacy And Policy" />
            <PageTop pagetitle="Privacy And Policy" />
            <PrivacyDescription />
            <Footer />
        </Fragment>
    )
}

export default PrivacyPage

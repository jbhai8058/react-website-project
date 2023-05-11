import React, { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation';
import PageTop from '../../Components/PageTop/PageTop';
import Footer from '../../Components/Footer/Footer';
import TermDescription from '../../Components/TermDescription/TermDescription';

const TermPage = () => {


    return (

        <Fragment>
            <TopNavigation title="Terms And Conditions" />
            <PageTop pagetitle="Terms And Conditions" />
            <TermDescription />
            <Footer />
        </Fragment>
    )
}

export default TermPage

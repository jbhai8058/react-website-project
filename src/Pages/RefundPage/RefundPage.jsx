import React, { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import RefundDescription from '../../Components/RefundDescription/RefundDescription'
import Footer from '../../Components/Footer/Footer'

const RefundPage = () => {

    return (

        <Fragment>
            <TopNavigation title="Refund Policy" />
            <PageTop pagetitle="Refund Policy" />
            <RefundDescription />
            <Footer />
        </Fragment>

    )
}

export default RefundPage

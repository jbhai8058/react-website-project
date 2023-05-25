import React from 'react'
import { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import NotFound from '../../Components/NotFound/NotFound'
import Footer from '../../Components/Footer/Footer'

const NotFoundPage = () => {
  return (
   <Fragment>
    <TopNavigation title='404 Page Not Found' />
    <PageTop pagetitle='Page Not Found' />
    <NotFound />
    <Footer />
   </Fragment>
  )
}

export default NotFoundPage

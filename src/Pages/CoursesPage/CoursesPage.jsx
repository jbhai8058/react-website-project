import React, { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import Courses from '../../Components/Courses/Course';
import Footer from '../../Components/Footer/Footer';

const CoursesPage = () => {

  return (

    <Fragment>
      <TopNavigation title="All Course" />
      <PageTop pagetitle="All Course" />
      <Courses />
      <Footer />
    </Fragment>
  )
}

export default CoursesPage

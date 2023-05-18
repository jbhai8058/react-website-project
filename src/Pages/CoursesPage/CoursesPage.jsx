import React, { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import PageTop from '../../Components/PageTop/PageTop'
import Footer from '../../Components/Footer/Footer';
import AllCourses from '../../Components/AllCourses/AllCourses';

const CoursesPage = () => {

  return (

    <Fragment>
      <TopNavigation title="All Course" />
      <PageTop pagetitle="All Course" />
      <AllCourses />
      <Footer />
    </Fragment>
  )
}

export default CoursesPage

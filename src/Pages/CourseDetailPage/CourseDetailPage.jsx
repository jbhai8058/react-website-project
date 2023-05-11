import React from 'react'
import { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation';
import PageTop from '../../Components/PageTop/PageTop';
import Footer from '../../Components/Footer/Footer';
import CourseDetail from '../../Components/CourseDetail/CourseDetail';

const CourseDetailPage = () => {

    return (
        <Fragment>
            <TopNavigation title="Course Details" />
            <PageTop pagetitle="Course Details" />
            <CourseDetail />
            <Footer />
        </Fragment>
    )
}

export default CourseDetailPage

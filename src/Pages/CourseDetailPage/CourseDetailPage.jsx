import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation';
import PageTop from '../../Components/PageTop/PageTop';
import Footer from '../../Components/Footer/Footer';
import CourseDetail from '../../Components/CourseDetail/CourseDetail';
import RestClient from '../../Rest Api/RestClient'
import AppUrl from '../../Rest Api/AppUrl'
import { useParams } from 'react-router-dom';

const CourseDetailPage = () => {

    const { courseID } = useParams();
    const { courseName } = useParams();

    const [coursedata , setcoursedata] = useState([]);

    useEffect(()=>{
        RestClient.GetRequest(AppUrl.CourseDetails + courseID).then((result)=>{
            setcoursedata(result);
        }).catch((error)=>{
            console.log(error);
        })
    }, [courseID])

    return (
        <Fragment>
            <TopNavigation title="Course Details" />
            <PageTop pagetitle={courseName} />
            <CourseDetail courseallData={coursedata} />
            <Footer />
        </Fragment>
    )
}

export default CourseDetailPage

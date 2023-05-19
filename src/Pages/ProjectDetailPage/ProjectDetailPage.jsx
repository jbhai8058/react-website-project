import React, { useState } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation';
import PageTop from '../../Components/PageTop/PageTop';
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails';
import Footer from '../../Components/Footer/Footer';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {

    const { ProjectPassedID } = useParams();

    return (

        <Fragment>
            <TopNavigation title="Project Details" />
            <PageTop pagetitle="Project Details" />
            <ProjectDetails id={ProjectPassedID} />
            <Footer />
        </Fragment>
    )
}

export default ProjectDetailPage

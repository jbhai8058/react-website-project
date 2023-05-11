import React from 'react'
import { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation';
import PageTop from '../../Components/PageTop/PageTop';
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails';
import Footer from '../../Components/Footer/Footer';

const ProjectDetailPage = () => {
    return (

        <Fragment>
            <TopNavigation title="Project Details" />
            <PageTop pagetitle="Project Details" />
            <ProjectDetails />
            <Footer />
        </Fragment>
    )
}

export default ProjectDetailPage

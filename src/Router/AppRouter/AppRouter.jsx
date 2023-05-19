import React from 'react'
import { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomePage from '../../Pages/HomePage/HomePage';
import ServicePage from '../../Pages/ServicesPage/ServicePage';
import CoursesPage from '../../Pages/CoursesPage/CoursesPage';
import PortfoiloPage from '../../Pages/PortfoiloPage/PortfoiloPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';    
import ContactPage from '../../Pages/ContactPage/ContactPage';
import RefundPage from '../../Pages/RefundPage/RefundPage';
import TermPage from '../../Pages/TermPage/TermPage';
import PrivacyPage from '../../Pages/PrivacyPage/PrivacyPage';
import ProjectDetailPage from '../../Pages/ProjectDetailPage/ProjectDetailPage';
import CourseDetailPage from '../../Pages/CourseDetailPage/CourseDetailPage';

const AppRouter = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact  path='/' element={<HomePage />} />
                    <Route  path='/service' element={<ServicePage />} />
                    <Route  path='/course' element={<CoursesPage />} />
                    <Route  path='/portfoilo' element={<PortfoiloPage />} />
                    <Route  path='/about' element={<AboutPage />} />
                    <Route  path='/contact' element={<ContactPage />} />
                    <Route  path='/refund' element={<RefundPage />} />
                    <Route  path='/terms' element={<TermPage />} />
                    <Route  path='/privacy' element={<PrivacyPage />} />
                    <Route  path='/projectDetails/:projectID/:projectName' element={<ProjectDetailPage />} />
                    <Route  path='/coursedetail/:courseID' element={<CourseDetailPage />} />
                </Routes>
            </Fragment>
        </Router>
    )
}

export default AppRouter

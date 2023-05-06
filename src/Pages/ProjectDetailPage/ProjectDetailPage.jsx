import React from 'react'
import { Fragment } from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation';
import PageTop from '../../Components/PageTop/PageTop';
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';

const ProjectDetailPage = () => {


    const [loading, setloading] = useState(true)

    useEffect(() => {
        // simulate a 2 second loading time
        const timer = setTimeout(() => {
            setloading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Fragment>
            {
                loading ?
                    <div className='loader'>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#051b35', '#000000', '#051b35', '#000000', '#051b35']}
                            loading={loading}
                        />
                    </div>
                    :

                    <Fragment>
                        <TopNavigation title="Project Details" />
                        <PageTop pagetitle="Project Details" />
                        <ProjectDetails />
                        <Footer />
                    </Fragment>
            }
        </Fragment>
    )
}

export default ProjectDetailPage

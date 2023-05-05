import React, { Fragment, useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner';
import TopNavigation from '../../Components/TopNavigation/TopNavigation';
import PageTop from '../../Components/PageTop/PageTop';
import Footer from '../../Components/Footer/Footer';
import TermDescription from '../../Components/TermDescription/TermDescription';

const TermPage = () => {


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
                        <TopNavigation title="Terms And Conditions" />
                        <PageTop pagetitle="Terms And Conditions" />
                        <TermDescription />
                        <Footer />
                    </Fragment>
            }
        </Fragment>
    )
}

export default TermPage

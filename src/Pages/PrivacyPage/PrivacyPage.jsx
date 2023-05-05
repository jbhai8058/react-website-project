import React, { Fragment, useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner';
import PrivacyDescription from '../../Components/PrivacyDescription/PrivacyDescription';
import Footer from '../../Components/Footer/Footer';
import PageTop from '../../Components/PageTop/PageTop';
import TopNavigation from '../../Components/TopNavigation/TopNavigation';

const PrivacyPage = () => {
    
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
                        <TopNavigation title="Privacy And Policy" />
                        <PageTop pagetitle="Privacy And Policy" />
                        <PrivacyDescription />
                        <Footer />
                    </Fragment>
            }
        </Fragment>
  )
}

export default PrivacyPage

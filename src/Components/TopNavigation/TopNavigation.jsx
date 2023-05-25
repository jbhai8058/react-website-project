import React, { useCallback, useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../../assets/css/custom.css';
import '../../assets/css/responsive.css';
import {
    NavLink
} from "react-router-dom";

const TopNavigation = (props) => {


    const [navBarTitle, setNavBarTitle] = useState('navTitle');
    const [navBarBack, setNavBarBack] = useState('navBackground');
    const [navBarItem, setNavBarItem] = useState('navItem');
    const [navVarient, setNavVarient] = useState('dark');

    const onScroll = useCallback(() => {
        if (window.scrollY > 150) {
            setNavBarTitle('navTitleScroll');
            setNavBarBack('navBackgroundScroll');
            setNavBarItem('navItemScroll');
            setNavVarient('light')
        } else if (window.scrollY < 150) {
            setNavBarTitle('navTitle');
            setNavBarBack('navBackground');
            setNavBarItem('navItem');
            setNavVarient('dark')
        }
    }, []);


    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);


    return (
        <Fragment>
            <title>{props.title}</title>
            <Navbar collapseOnSelect fixed='top' expand="lg" variant={navVarient} className={navBarBack}>
                <Container>
                <NavLink to='/'><Navbar.Brand className={navBarTitle} >EASY STANDING</Navbar.Brand></NavLink>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link> <NavLink className={navBarItem} to='/'>Home</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={navBarItem} to='/about'>About</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={navBarItem} to='/service'>Services</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={navBarItem} to='/course'>Courses</NavLink>  </Nav.Link>
                        <Nav.Link> <NavLink className={navBarItem} to='/portfoilo'>Portfoilo</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={navBarItem} to='/contact'>Contact Us</NavLink> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default TopNavigation

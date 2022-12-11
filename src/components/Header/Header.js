import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-10 mb-5">
            <Navbar className='' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="home" className='py-0 my-0'>
                        <div className="logo">
                            <img src="../../images/logo/logo.png" alt="logo" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <NavLink className="link-item py-2 px-3 text-base text-zinc-400 hover:text-zinc-300 font-normal blog no-underline duration-150 ease-in-out" to="/">Topics</NavLink>
                            <NavLink className="link-item py-2 px-3 text-base text-zinc-400 hover:text-zinc-300 font-normal blog no-underline duration-150 ease-in-out" to="statistics">Statistics</NavLink>
                            <NavLink className="link-item py-2 px-3 text-base text-zinc-400 hover:text-zinc-300 font-normal blog no-underline duration-150 ease-in-out" to="blog">Blog</NavLink>                           
                        </Nav>
                        <Nav className='ms-auto text-center'>
                            {/* <NavLink className="link-item py-2 px-3 text-base text-zinc-400 hover:text-zinc-300 font-normal blog no-underline duration-150 ease-in-out" to="about"><FontAwesomeIcon icon={faShoppingCart} /></NavLink> */}
                         
                            <NavLink className="link-item py-2 pl-3 text-base text-zinc-400 hover:text-zinc-300 font-normal blog no-underline duration-150 ease-in-out" to="about"><FontAwesomeIcon icon={faUser} /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
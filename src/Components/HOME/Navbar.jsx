import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

import { Link } from 'react-router-dom'

import logo from '../../images/home/logo/logome.png'

function Example(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="navbarController">
            <div className='container'>
                <Navbar {...args} expand='lg'>
                    <NavbarBrand href="/" style={{ width: '7%' }} >
                        <img src={logo} className='img-fluid' alt="" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto navbarLinkDiv" navbar >
                            <NavItem>
                                <Link className='hvr-underline-from-left' to='/'>HOME</Link>
                            </NavItem>
                            <NavItem>
                                <a className='hvr-underline-from-left' href="#about">ABOUT</a>
                            </NavItem>
                            <NavItem>
                                <a className='hvr-underline-from-left' href="#price">PRICE</a>
                            </NavItem>
                            <NavItem>
                                <a className='hvr-underline-from-left' href="#aloqa">CONTACT</a>
                            </NavItem>

                        </Nav>
                        <div className="navbarBtn">Rus</div>
                        <div className="navbarBtn">Log In</div>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Example;
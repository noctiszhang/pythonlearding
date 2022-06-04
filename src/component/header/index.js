import React, { Component, Fragment } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className='bsPrefix' expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className='display-1'>Xi Culture</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='ms-auto'>
                                <Nav.Link href="#videopp" className='display-7'>Video post-production</Nav.Link>
                                <Nav.Link href="#grapdes" className='display-7'>Graphic design</Nav.Link>
                                <Nav.Link href="#webdev" className='display-7'>Web development</Nav.Link>
                                <Nav.Link eventKey={2} href="#product" className='display-7'>Product design </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}
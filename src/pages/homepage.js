import React, { Fragment } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../assets/css/bootstrap.css'
import logo from '../images/brand.jpg'
import './style.css'
import CarouselDefine from '../component/carousel'
import Footer from '../component/footer'
import Hero from '../component/hero'
import Introduce from '../component/introduce'
import Card3D from '../component/card3d'
import Picslide from '../component/picslide'

export default function Homepage() {
    // 另一种定向跳转当前页面位置的办法
    // const FallDown1 = () => {
    //     const sec1 = document.getElementById('sec1')
    //     sec1.scrollIntoView()
    // }

    const Myref = React.useRef()

    React.useEffect(() => {
        document.addEventListener('scroll', ScrollFunc)
    }, [])

    const ScrollFunc = () => {
        const ScrollHeight = document.documentElement.scrollTop
        if (ScrollHeight > 300) {
            console.log('nav-top')
            Myref.current.classList.replace('mynav', 'nav-top')
        }
        else {
            console.log('nav')
            Myref.current.classList.replace('nav-top', 'mynav')
        }
    }

    return (
        <Fragment>
            <div onScroll={ScrollFunc}>
                <div className='mynav' ref={Myref}>
                    <Navbar expand="lg" style={{ width: '100%' }}>
                        <Container fluid>
                            <Navbar.Brand href="#sec1">
                                <img
                                    alt=""
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{' '}
                                Xiting Culture
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '200px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#sec1">Home</Nav.Link>
                                    <Nav.Link href="#sec2">About</Nav.Link>
                                    <Nav.Link href="#sec3">Bitcoinpan</Nav.Link>
                                    <Nav.Link href="#sec4">Refer</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div id='sec1'>
                    <CarouselDefine />
                    <Picslide />
                </div>
                <div id='sec2'><Hero /></div>
                <div id='sec3'><Introduce /></div>
                <Card3D />
                <div id='sec4'><Footer /></div>
            </div>
        </Fragment>
    )
}

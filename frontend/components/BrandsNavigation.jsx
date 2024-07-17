import React from 'react';
import { Link } from 'react-router-dom';
import beauty from '../assets/img/beauty.webp';
import mobiles from '../assets/img/mobiles.webp';
import watch from '../assets/img/watch.jpeg';
import kit from '../assets/img/kit.webp';
import elec from '../assets/img/elec.webp';
import fasion from '../assets/img/fasion.webp';
import books from '../assets/img/books.webp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function BrandsNavigation() {
    return (
        <Navbar bg="white" variant="white" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ width: '100%' }}>
                        <div className="row" style={{ width: '100%', border: '1px solid white', marginLeft: '3px', backgroundColor: 'wheat' }}>
                            <div className="col-6 col-md-2">
                                <Link to='/MobilesPage' className='nav-link'> <img src={mobiles} alt="imgs" style={{ border: '1px solid', borderRadius: '4px' }} /> <br /><b>Mobiles & Tablets </b></Link>
                            </div>
                            <div className="col-6 col-md-2">
                                <Link to='/WatchPage' className='nav-link'> <img src={watch} alt="imgs" style={{ border: '1px solid', borderRadius: '4px' }} height='90' /> <br /><b> Watch</b></Link>
                            </div>
                            <div className="col-6 col-md-2">
                                <Link to='/Fasion' className='nav-link'> <img src={fasion} alt="imgs" style={{ border: '1px solid', borderRadius: '4px' }} /> <br /><b>Fashion </b></Link>
                            </div>
                            <div className="col-6 col-md-2">
                                <Link to='/Beauty' className='nav-link'> <img src={beauty} alt="imgs" style={{ border: '1px solid', borderRadius: '4px' }} /> <br /><b> Beauty</b></Link>
                            </div>
                            <div className="col-6 col-md-2">
                                <Link to='/Electronics' className='nav-link'> <img src={elec} alt="imgs" style={{ border: '1px solid', borderRadius: '4px' }} /> <br /><b>Electronics </b></Link>
                            </div>
                            <div className="col-6 col-md-2">
                                <Link to='/BooksPage' className='nav-link'><img src={books} alt="imgs" style={{ border: '1px solid', borderRadius: '4px', height:'90px' }} />  <br /><b> Books</b></Link>
                            </div>
                         
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BrandsNavigation;

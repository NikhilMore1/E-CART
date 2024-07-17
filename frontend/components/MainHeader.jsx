import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/img/logo.svg';
import '@fortawesome/free-solid-svg-icons';
import { faCartPlus, faHistory, faUserCircle } from '@fortawesome/free-solid-svg-icons';
function MainHeader() {
 
    return ( 
        <Navbar bg="white" variant="white" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home"><span style={{fontSize:'35px',fontWeight:'bolder',color:'aqua',boxShadow:'6px 6px blue',marginLeft:'15px'}}><b><i>E-CART<FontAwesomeIcon icon={faCartPlus} style={{color:'blue'}}/></i></b></span></Navbar.Brand>&nbsp;
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/' className='nav-link' style={{fontSize: '1.1rem', marginRight: '25px'}}><b><i>Home</i></b></Link>
                    <div className='nav-link'>
                        <form className="d-flex">
                        <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search for products, Brands and More.."
                                        aria-label="Search"
                                        style={{ width: '40rem' }}
                                       
                                    />                                                                    
                        </form>
                    </div>&nbsp;
                    <Link to='/Registration' className='nav-link' style={{fontSize: '1.1rem'}} ><FontAwesomeIcon icon={faUserCircle} style={{marginLeft: '30px'}} /> <span style={{marginLeft:'5px'}}> <b>Login</b></span></Link>&nbsp;
                    <Link to='#' className='nav-link' style={{fontSize: '1.1rem'}}><FontAwesomeIcon icon={faCartPlus} style={{marginLeft: '20px'}} /> <span style={{marginLeft:'5px'}}> <b>Cart</b></span></Link>&nbsp;
                    <Link to='#' className='nav-link' style={{fontSize: '1.1rem'}}><FontAwesomeIcon icon={faHistory} style={{marginLeft: '20px'}} /> <span style={{marginLeft:'5px'}}> <b>Last Order</b></span></Link>&nbsp;
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
     );
}

export default MainHeader;
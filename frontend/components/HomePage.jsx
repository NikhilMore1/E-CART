import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartPlus, faHistory, faSignOut, faFeatherPointed, faDotCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandsNavigation from './BrandsNavigation';
import Carausals from './Carausals';
import axios from 'axios';
import HomeSlider1 from './HomeSlider1';
import Footer from './Footer';
const Names = [
    {id:1,name:'watch'},
    {id:2,name:'fasion'}
]
function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/search");
            setProducts(resp.data.product);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            const filtered = products.filter(product => product.Heading.toLowerCase().includes(query.toLowerCase()));
            const fil = Names.filter(pr=>pr.name.toLowerCase().includes(query.toLowerCase()));
            setFilteredProducts(filtered,fil);
            if(query==='watch'){
                navigate('/WatchPage');
            }
            if(query==='fasion'){
                navigate('/Fasion');
            }
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (id) => {
        navigate(`/ProductPage/${id}`);
    };


    const [showLogout, setShowLogout] = useState(false);

    const logout = () => {
        // Handle logout logic
        localStorage.removeItem("role");
        navigate('/login'); // Assuming you have a login route
    };

    return (
        <div>
            <Navbar bg="white" variant="white" expand="lg">
                <Container fluid> 
                    <Navbar.Brand href="#home"><span style={{fontSize:'35px',fontWeight:'bolder',color:'aqua',boxShadow:'6px 6px blue',marginLeft:'15px'}}><b><i>E-CART<FontAwesomeIcon icon={faCartPlus} style={{color:'blue'}}/></i></b></span></Navbar.Brand>&nbsp;
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='nav-link' style={{ fontSize: '1.1rem', marginRight: '25px' }}><b><i>Home</i></b></Link>
                            <div className='nav-link'>
                                <form className="d-flex position-relative">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search for products, Brands and More.."
                                        aria-label="Search"
                                        style={{ width: '40rem' }}
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    {filteredProducts.length > 0 && (
                                        <ul className="list-group position-absolute" style={{ width: '40rem', top: '100%', zIndex: 1000 }}>
                                            {filteredProducts.map(product => (
                                                <li key={product._id} className="list-group-item list-group-item-action" onClick={() => handleProductClick(product._id)}>
                                                    {product.Heading}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </form>
                            </div>&nbsp;
                            <Link to='#' className='nav-link' style={{ fontSize: '1.1rem' }} ><FontAwesomeIcon icon={faUserCircle} style={{ marginLeft: '20px' }} /> <span style={{ marginLeft: '5px' }}> <b>{localStorage.getItem("Name")}</b></span></Link>&nbsp;
                            <Link to='/AddtoCart' className='nav-link' style={{ fontSize: '1.1rem' }}><FontAwesomeIcon icon={faCartPlus} style={{ marginLeft: '20px' }} /> <span style={{ marginLeft: '5px' }}> <b>Cart</b></span></Link>&nbsp;
                            <Link to='/LastHistory' className='nav-link' style={{ fontSize: '1.1rem' }}><FontAwesomeIcon icon={faHistory} style={{ marginLeft: '20px' }} /> <span style={{ marginLeft: '5px' }}> <b>Last Order</b></span></Link>
                            <div 
                        className="nav-link dots"
                        onMouseEnter={() => setShowLogout(true)}
                        onMouseLeave={() => setShowLogout(false)}
                    >
                       <FontAwesomeIcon icon={faEllipsisV} />
                        {showLogout && (
                            <button 
                                style={{ 
                                    fontSize: '1.1rem',
                                    backgroundColor: '#e36282',
                                    border: '1px solid white',
                                    borderRadius: '5px',
                                    
                                    marginTop: '-5px' 
                                }} 
                                onClick={logout}
                            >
                                <FontAwesomeIcon icon={faSignOut} style={{ marginLeft: '20px' }} /> 
                                <span style={{ marginLeft: '5px' }}> 
                                    <b>Log-out</b>
                                </span>
                            </button>
                        )}
                    </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <BrandsNavigation />
            <Carausals />
            <HomeSlider1/>
            <Footer/>
           
          
        </div>
    );
}

export default HomePage;

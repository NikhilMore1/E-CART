import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/img/logo.svg';
import '@fortawesome/free-solid-svg-icons';
import { faCartPlus, faHistory, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/css/nav.css';
function Navs() {
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
            // const fil = Names.filter(pr=>pr.name.toLowerCase().includes(query.toLowerCase()));
            setFilteredProducts(filtered);
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
    return ( 
        <div className='navbar'>
        <Navbar bg="white" variant="white" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home"><span style={{fontSize:'35px',fontWeight:'bolder',marginLeft:'20px',color:'aqua',boxShadow:'6px 6px blue'}}><b><i>E-CART<FontAwesomeIcon icon={faCartPlus} style={{color:'blue'}}/></i></b></span></Navbar.Brand>&nbsp;
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
                    <Link to='#' className='nav-link' style={{fontSize: '1.1rem'}} ><FontAwesomeIcon icon={faUserCircle} style={{marginLeft: '30px'}} /> <span style={{marginLeft:'5px'}}> <b>{localStorage.getItem("Name")}</b></span></Link>&nbsp;
                    <Link to='/AddtoCart' className='nav-link' style={{fontSize: '1.1rem'}}><FontAwesomeIcon icon={faCartPlus} style={{marginLeft: '20px'}} /> <span style={{marginLeft:'5px'}}> <b>Cart</b></span></Link>&nbsp;
                    <Link to='#' className='nav-link' style={{fontSize: '1.1rem'}}><FontAwesomeIcon icon={faHistory} style={{marginLeft: '20px'}} /> <span style={{marginLeft:'5px'}}> <b>Last Order</b></span></Link>&nbsp;
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
     );
}

export default Navs;
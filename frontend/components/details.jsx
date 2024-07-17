import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Navs from "./Navs";
import Footer from "./Footer";
import BuyProductNotif from "./BuyProductNotif";

function Details() {
    const [product, setProduct] = useState({});
    const [watch,setWatch] = useState([]);
    const [isModel,setIsModel] = useState(false);
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

          
    const fetchDatahis = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/cart");
            setWatch(resp.data.product);
            
            console.log(product);
        } catch (error) {
            console.log(error);
        }
    };

        const fetchData = async () => {
            try {
                const resp = await axios.get(`http://localhost:5000/api/mobile/${_id}`);
                console.log("API response:", resp.data);
                setProduct(resp.data.product);
            } catch (error) {
                console.log("Error fetching product data:", error);
            }
        };
        fetchData();
        fetchDatahis();
    }, [_id]);

    const handleAddHistory = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/history', product);
            setWatch(response.data.product);
            console.log(product);
            if (response) {
                setIsModel(true);
            }
        } catch (error) {
            console.log("Error adding product to history:", error);
        }
    };

    const handleAddToCart = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/cart', product);
            console.log("Product added to cart:", response.data);
            navigate('/AddtoCart');
        } catch (error) {
            console.log("Error adding product to cart:", error);
        }
    };
    const handleAddtoSearch = async()=>{
        try{
            const responce   = await axios.post('http://localhost:5000/api/search',product);
            console.log(responce.data.product);
        }catch(error){
            console.log(error);
        }
    };

    const handleClient2 = () =>{
        handleAddHistory();
    }
    const handleClick = ()=>{
        handleAddToCart();
        handleAddtoSearch();
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleCloseModal = () => {
        setIsModel(false);
        navigate('/PlaceOrder');
    };

    return (
        <div>
            <Navs/>
        
        <div className="container-fluid bg-secondary">
            <div className="card mt-3">
                <div className="card-header"></div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4" style={{ marginLeft: '5rem' }}>
                            <img src={product.image} className="card-img-top" alt={product.Heading} style={{ width: '450px', height: '550px' }} />
                            <div className="row mt-4">
                                    <div className="col-5" style={{ marginLeft: '1px' }}>
                                        <div className="card-text">
                                            <button
                                                onClick={handleClick}
                                                style={{
                                                    border: '1px solid green',
                                                    backgroundColor: '#f7a048',
                                                    width: '200px',
                                                    borderRadius: '5px',
                                                    textAlign: 'center',
                                                    height: '60px',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '20px'
                                                }}>
                                                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6" style={{ marginLeft: '25px' }}>
                                        <div className="card-text">
                                            <button
                                            onClick={handleClient2}
                                                style={{
                                                    border: '1px solid green',
                                                    backgroundColor: '#f05918',
                                                    width: '200px',
                                                    borderRadius: '5px',
                                                    textAlign: 'center',
                                                    height: '60px',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '20px'
                                                }}>
                                                <FontAwesomeIcon icon={faBoltLightning} /> Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                
                        </div>
                        <div className="col-5" style={{ marginLeft: '1rem' }}>
                                <p style={{ color: 'gray',fontSize:'25px' }}><b><i>{product.Company}</i></b></p>
                                <h5 style={{ color: 'black',fontSize:'25px',fontStyle:'italic',fontWeight:'bold' }}>{product.Heading}</h5>
                                <div className="row mt-3">                                                         
                                </div>
                                <div className="row">   
                                    <div className="col">
                                        <p><b><i>2,114 ratings and 139 reviews</i></b></p>
                                    </div>
                                </div>
                                <div className="row" style={{fontSize:'20px',fontWeight:'bold',color:'gray',fontStyle:'italic'}}>
                                <h4 style={{color:'black',fontWeight:'bold'}}>₹{product.Price}</h4>
                            <p> {product.RamRom}</p>
                            <p> {product.Camera}</p>
                            <p>{product.Battery}</p>
                            <p> {product.Processor}</p>
                            <p> {product.Display}</p>
                                </div>
                                <div className="card-text" style={{ border: '1px solid green', backgroundColor: 'green', width: '50px', borderRadius: '10px', textAlign: 'center', height: '30px', color: 'white', fontWeight: 'bold' }}>{product.Rating}⭐</div>
                                <div className="row">
                                    <p><b>Available offers:-</b></p><br /><br />
                                    <p><b><i><li>Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</li></i></b></p><br />
                                    <p><b><i><li>Bank Offer5% Cashback on Flipkart Axis Bank Card</li></i></b></p><br />
                                    <p><b><i><li>Special PriceGet at flat ₹494T&C</li></i></b></p><br />
                                    <p><b><i><li>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know More</li></i></b></p><br />
                                </div>
                                <div className="row">
                                    <p style={{ color: 'gray', fontWeight: 'bold' }}>Deliver By : <span style={{ color: 'green' }}>{product.delivery}</span></p>
                                </div>
                            </div>
                        {/* <div className="col-4">
                            <h3>{product.Heading}</h3>
                            <h4>Price: Rs {product.Price}</h4>
                            <p>Ram/Rom: {product.RamRom}</p>
                            <p>Camera: {product.Camera}</p>
                            <p>Battery: {product.Battery}</p>
                            <p>Processor: {product.Processor}</p>
                            <p>Display: {product.Display}</p>
                            <h5>Rating: {product.Rating}</h5>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <BuyProductNotif open={isModel} handleClose={handleCloseModal} />
        </div>
    );
}

export default Details;

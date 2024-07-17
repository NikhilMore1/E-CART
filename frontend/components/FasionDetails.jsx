import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navs from "./Navs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faCartPlus, faL } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import BuyProductNotif from "./BuyProductNotif";

function FasionDetails() {
    const [product, setProduct] = useState({});
    const { _id } = useParams();
    const [watch,setWatch] = useState([]);
    const navigate = useNavigate();
    const [isModel,setIsModel] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`http://localhost:5000/api/Kurtas/${_id}`);
                console.log("API response:", resp.data);
                setProduct(resp.data.product);
            } catch (error) {
                console.log("Error fetching product data:", error);
            }
        };
        fetchData();
    }, [_id]);

    const handleAddHistory = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/history', product);
            if(response){
                setIsModel(true);
            }
            setWatch(response.data.product);
            console.log(product);
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

    const handleClick2 = () =>{
        handleAddHistory();
    }
    const handleClick = ()=>{
        handleAddToCart();
        handleAddtoSearch();
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleCloseModal = () =>{
        setIsModel(false);
        navigate('/PlaceOrder');
    }


    return (
        <div>
            <Navs />
            <div className="container-fluid bg-secondary">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4" style={{ marginLeft: '6rem' }}>
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
                                            onClick={handleClick2}
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
                            <div className="col-7" style={{ marginLeft: '1rem' }}>
                                <h5 style={{ color: 'gray' }}><b><i>{product.Company}</i></b></h5>
                                <h5>{product.Heading}</h5>
                                <div className="row mt-3">
                                    <div className="col-2">
                                        <h4 style={{ marginLeft: '-10px' }}><span style={{ marginTrim: 'all' }}><b><i>₹</i></b></span><b><i>{product.Price}</i></b></h4>
                                    </div>
                                    <div className="col" style={{lineHeight:'0.6'}}>
                                        <p className="mt-1" style={{ color: 'green' }}><b>{product.discount}</b></p>
                                        <p className="mt-1" style={{ color: 'green' }}><b>{product.free}</b></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <div className="card-text" style={{ border: '1px solid green', backgroundColor: 'green', width: '50px', borderRadius: '10px', textAlign: 'center', height: '30px', color: 'white', fontWeight: 'bold' }}>{product.Rating}⭐</div>
                                    </div>
                                    <div className="col">
                                        <p><b><i>2,114 ratings and 139 reviews</i></b></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <p>Size: <span style={{ border: '1px solid black', borderRadius: '5px', width: '30px', fontSize: '20px', letterSpacing: '10px', marginLeft: '4rem' }}>{product.Size}</span></p>
                                </div>
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <BuyProductNotif open={isModel} handleClose={handleCloseModal} />
        </div>
    );
}

export default FasionDetails;

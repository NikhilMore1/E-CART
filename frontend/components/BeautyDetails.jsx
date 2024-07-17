import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navs from "./Navs";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BuyProductNotif from "./BuyProductNotif";
import { faBoltLightning, faCartPlus } from "@fortawesome/free-solid-svg-icons";

function BeautyDetails() {

    const [product, setProduct] = useState({}); // Initialize as null
    const { _id } = useParams(); // Use `id` instead of `_id` for clarity
    const [isModel,setIsModel] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`http://localhost:5000/api/Beauty/${_id}`);
                console.log("API response:", resp.data); // Log the response for debugging
                setProduct(resp.data.product);// Ensure this matches the structure of your API response
                console.log(product);

            } catch (error) {
                console.log("Error fetching product data:", error);
            }
        };
        fetchData();
    }, [_id]);

    if (!product) {
        return <div>Loading...</div>; // Add a loading state
    }

    const handleCloseModal = () => {
        setIsModel(false);
        navigate('/PlaceOrder',{state:{product}});
    };
    const handleAddHistory = async () => {

        try {
            const response = await axios.post('http://localhost:5000/api/history', product);
            
            console.log(product);
            if (response) {
                setIsModel(true);
            }
        }
    catch (error) {
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

const handleAddtoSearch = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/search', product);
        console.log(response.data.product);
    } catch (error) {
        console.log(error);
    }
};

const handleClick2 = () =>{
    handleAddHistory();
 
}
const handleClick = () => {
    handleAddToCart();
    handleAddtoSearch();
};
    return ( 
        <div>
            <Navs />
            <div className="container-fluid">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <img src={product.image} className="card-img-top" alt={product.Heading} style={{ width: '100%', height: '500px' }} />
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <div className="card-text">
                                            <button
                                                onClick={handleClick}
                                                style={{
                                                    border: '1px solid green',
                                                    backgroundColor: '#f7a048',
                                                    width: '100%',
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
                                    <div className="col-6">
                                        <div className="card-text">
                                            <button
                                                onClick={handleClick2}
                                                style={{
                                                    border: '1px solid green',
                                                    backgroundColor: '#f05918',
                                                    width: '100%',
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
                            <div className="col-lg-8 col-md-6">
                                <h5 style={{ color: 'gray' }}><b><i>{product.Company}</i></b></h5>
                                <h5>{product.Heading}</h5>
                                <div className="row mt-3">
                                    <div className="col-4 col-md-3">
                                        <h4><b><i>₹{product.Price}</i></b></h4>
                                    </div>
                                    <div className="col-8 col-md-9">
                                        <p style={{ color: 'green' }}><b>{product.discount}</b></p>
                                        <p style={{ color: 'green' }}><b>{product.free}</b></p>
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    <div className="col-9 col-md-10">
                                        <p><b><i>2,114 ratings and 139 reviews</i></b></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <p><b>Available offers:-</b></p>
                                    <ul>
                                        <li>Bank Offer: Get ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</li>
                                        <li>Bank Offer: 5% Cashback on Flipkart Axis Bank Card</li>
                                        <li>Special Price: Get at flat ₹494</li>
                                        <li>Partner Offer: Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000</li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <p style={{ color: 'gray', fontWeight: 'bold' }}>Deliver By: <span style={{ color: 'green' }}>{product.Dilivery}</span></p>
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

export default BeautyDetails;
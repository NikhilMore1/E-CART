import { useEffect, useState } from "react";
import Navs from "./Navs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UPI from '../assets/img/UPI.gif';
import Footer from "./Footer";

import Thanks from "./Thanks";

function PlaceOrder() {
    const [watch, setWatch] = useState([]);
    const [pro, setPro] = useState([]);
    const [product, setProduct] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
    const navigate = useNavigate();
    
    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/cart");
            setWatch(resp.data.product);
            setProduct(resp.data.product);
            console.log(product);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddHistory = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/history', watch);
            setPro(response.data.product);
            console.log(pro);
            if (response) {
                setIsModalOpen(true); // Show the modal on successful order
            }
        } catch (error) {
            console.log("Error adding product to history:", error);
        }
    };

    const handleRemove = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/cart/${id}`);
            setWatch(watch.filter(product => product._id !== id));
        } catch (error) {
            console.log("Error removing product from cart:", error);
        }
    };

    const calculateTotalPrice = () => {
        return watch.reduce((total, product) => total + Number(product.Price), 0);
    };

    const dis = () => {
        return watch.reduce((total, product) => total + Number(product.discount), 0);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/LastHistory');
    };

    return (
        <div>
            <Navs />
            <div className="container mt-3">
                <div className="row" style={{ marginLeft: '-20px' }}>
                    <div className="col-9" style={{ backgroundColor: '#f5f7b7' }}>
                        <div className="row" style={{ backgroundColor: 'blue', height: '40px', border: '1px solid blue', borderRadius: '10px' }}>
                            <h5 style={{ color: 'white', textTransform: 'uppercase', fontWeight: 'bold', marginTop: '3px' }}>Payment Options</h5>
                        </div>
                        <div className="row mt-2" style={{ backgroundColor: 'white', height: '170px' }}>
                            <div className="col-1">
                                <img src={UPI} alt="upi" style={{ height: '30px', width: '40px' }} />
                            </div>
                            <div className="col">
                                <span>UPI</span>
                                <p>
                                    <Link to='/PhonePay' >
                                    <button 
                                        style={{ 
                                            border: '1px solid green', 
                                            backgroundColor: 'white', 
                                            width: '200px', 
                                            borderRadius: '5px', 
                                            textAlign: 'center', 
                                            height: '40px', 
                                            color: 'black', 
                                            fontWeight: 'bold', 
                                            fontSize: '16px' 
                                        }}
                                    >
                                        Pay with Phone Pay
                                    </button>
                                    </Link>
                                </p>
                                <p>
                                    <Link to='/GooglePay'>
                                    <button 
                                        style={{ 
                                            border: '1px solid green', 
                                            backgroundColor: 'white', 
                                            width: '200px', 
                                            borderRadius: '5px', 
                                            textAlign: 'center', 
                                            height: '40px', 
                                            color: 'black', 
                                            fontWeight: 'bold', 
                                            fontSize: '16px' 
                                        }}
                                    >
                                        Pay with Google Pay
                                    </button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="row mt-2" style={{ backgroundColor: 'white', height: '100px' }}>
                            <div className="col-1">
                                <img src={UPI} alt="upi" style={{ height: '30px', width: '40px' }} />
                            </div>
                            <div className="col">
                                <span>WALLET</span>
                            </div>
                        </div>
                        <div className="row mt-2" style={{ backgroundColor: 'white', height: '100px' }}>
                            <div className="col-1">
                                <img src={UPI} alt="upi" style={{ height: '30px', width: '40px' }} />
                            </div>
                            <div className="col">
                                <span>Cash On Delivery</span>
                                <p>
                                    <button 
                                        style={{ 
                                            border: '1px solid green', 
                                            backgroundColor: '#f05918', 
                                            width: '200px', 
                                            borderRadius: '5px', 
                                            textAlign: 'center', 
                                            height: '40px', 
                                            color: 'white', 
                                            fontWeight: 'bold', 
                                            fontSize: '16px' 
                                        }}
                                        onClick={handleAddHistory}
                                    >
                                        Confirm Order
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" style={{ backgroundColor: 'whitesmoke', border: '1px solid black', borderRadius: '7px', height: '490px' }}>
                        <div className="row">
                            <p className="mt-3" style={{ fontSize: '20px', color: 'gray', textTransform: 'uppercase' }}><b>Price Details:</b></p>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col">
                                <p style={{ fontSize: '18px' }}>Price</p>
                            </div>
                            <div className="col" style={{ textAlign: 'end', fontFamily: 'fantasy', fontSize: '20px' }}>
                                <p><span style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>₹</span>{calculateTotalPrice()}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p style={{ fontSize: '18px' }}>Actual Price</p>
                            </div>
                            <div className="col" style={{ textAlign: 'end', fontFamily: 'fantasy', fontSize: '20px', color: 'green' }}>
                                <p><span style={{ fontFamily: 'cursive', fontWeight: 'bold', color: 'green' }}>₹</span>{dis()}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p style={{ fontSize: '18px' }}>Discount</p>
                            </div>
                            <div className="col" style={{ textAlign: 'end', fontFamily: 'fantasy', fontSize: '20px', color: 'green' }}>
                                <p><span style={{ fontFamily: 'cursive', fontWeight: 'bold', color: 'green' }}>₹</span>50% OFF</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p style={{ fontSize: '18px' }}>Coupons For You</p>
                            </div>
                            <div className="col" style={{ textAlign: 'end', fontFamily: 'fantasy', fontSize: '20px', color: 'green' }}>
                                <p><span style={{ fontFamily: 'cursive', fontWeight: 'bold', color: 'green' }}>-₹</span>40</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p style={{ fontSize: '18px' }}>Delivery Charges</p>
                            </div>
                            <div className="col" style={{ textAlign: 'end', fontFamily: 'fantasy', fontSize: '20px', color: 'green' }}>
                                <p><span style={{ fontFamily: 'cursive', fontWeight: 'bold', color: 'green' }}></span>Free</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <p style={{ fontSize: '18px' }}>Total Amount</p>
                            </div>
                            <div className="col" style={{ textAlign: 'end', fontFamily: 'fantasy', fontSize: '20px', color: 'black' }}>
                                <p><span style={{ fontFamily: 'cursive', fontWeight: 'bold', color: 'black' }}>₹</span>{calculateTotalPrice() - 40}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p style={{ color: 'green', fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>You will save Money on this order!!</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                    </div>
                </div>
            </div>
            <Footer />
            <Thanks open={isModalOpen} handleClose={handleCloseModal} />
        </div>
    );
}

export default PlaceOrder;

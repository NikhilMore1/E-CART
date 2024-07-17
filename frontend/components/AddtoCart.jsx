import { useEffect, useState } from "react";
import Navs from "./Navs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinusCircle, faPlusCircle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer.jsx';
function AddtoCart() {
    const [watch, setWatch] = useState([]);
    const [product, setProduct] = useState({});
    const [pro, setPro] = useState([]);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/cart");
            const products = resp.data.product.map(p => ({ ...p, quantity: 1 }));
            setWatch(products);
            setProduct(products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddHistory = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/history', product);
            setPro(response.data.product);
            console.log(pro);
            if (response) {
                alert("Your purchase is confirmed!!");
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

    const handleIncrement = (id) => {
        setWatch(watch.map(product => 
            product._id === id ? { ...product, quantity: product.quantity + 1 } : product
        ));
    };

    const handleDecrement = (id) => {
        setWatch(watch.map(product => 
            product._id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
        ));
    };

    const calculateTotalPrice = () => {
        return watch.reduce((total, product) => total + (product.Price * product.quantity), 0);
    };

    const dis = () => {
        return watch.reduce((total, product) => total + Number(product.discount), 0);
    };

    const navtoorder = () => {
        const conf = confirm("You want to purchase cart items?");
        const totalCartPrice = watch.reduce((total, product) => total + (product.Price * product.quantity), 0);

        if (totalCartPrice === 0) {
            alert('Please purchase any product you want!');
            setTimeout(() => {
                navigate('/AddtoCart');
            }, 400);
        } else if (conf) {
            setTimeout(() => {
                navigate('/PlaceOrder');
            }, 5000);
        } else {
            setTimeout(() => {
                navigate('/AddtoCart');
            }, 500);
        }
    };

    return (
        <div>
            <Navs />
            <div className="container mt-3" style={{ backgroundColor: 'rgb(231, 238, 208)' }}>
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <div className="row mt-3">
                            {watch.map(product => (
                                <div className="col-lg-4 col-md-6" key={product._id}>
                                    <div className="card mt-3">
                                        <Link to={`/details/${product._id}`}>
                                            <img src={product.image} className="card-img-top" alt={product.Heading} height="300" />
                                        </Link>
                                        <div className="card-body">
                                            <h6 className="card-title" style={{ color: 'gray' }}><b>{product.Company}</b></h6>
                                            <h6 className="card-title">{product.Heading}</h6>
                                            <p className="card-text" style={{ color: 'gray' }}><b><i>{product.color}</i></b></p>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p><b>₹{product.Price}</b></p>
                                                </div>
                                                <div className="col-6">
                                                    <p style={{ color: 'green', fontSize: '14px' }}><b>{product.discount}</b></p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <p style={{ color: 'green', fontSize: '12px' }}><b>{product.delivery}</b></p>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-3">
                                                    <button
                                                        onClick={() => handleIncrement(product._id)}
                                                        style={{
                                                            border: '1px solid green',
                                                            backgroundColor: '#28a745',
                                                            width: '100%',
                                                            borderRadius: '5px',
                                                            textAlign: 'center',
                                                            height: '40px',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            fontSize: '20px'
                                                        }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlusCircle} />
                                                    </button>
                                                </div>
                                                <div className="col-3" style={{
                                                    border: '1px solid green',
                                                    borderRadius: '5px',
                                                    textAlign: 'center',
                                                    height: '40px',
                                                    fontWeight: 'bold',
                                                    fontSize: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <span>{product.quantity}</span>
                                                </div>
                                                <div className="col-3">
                                                    <button
                                                        onClick={() => handleDecrement(product._id)}
                                                        style={{
                                                            border: '1px solid green',
                                                            backgroundColor: '#dc3545',
                                                            width: '100%',
                                                            borderRadius: '5px',
                                                            textAlign: 'center',
                                                            height: '40px',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            fontSize: '20px'
                                                        }}
                                                    >
                                                        <FontAwesomeIcon icon={faMinusCircle} />
                                                    </button>
                                                </div>
                                                <div className="col-3">
                                                    <button
                                                        style={{
                                                            border: '1px solid green',
                                                            backgroundColor: 'red',
                                                            width: '100%',
                                                            borderRadius: '5px',
                                                            textAlign: 'center',
                                                            height: '40px',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            fontSize: '16px'
                                                        }}
                                                        onClick={() => handleRemove(product._id)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <button
                                                        style={{
                                                            border: '1px solid green',
                                                            backgroundColor: 'green',
                                                            width: '100%',
                                                            borderRadius: '5px',
                                                            textAlign: 'center',
                                                            height: '40px',
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            fontSize: '16px'
                                                        }}
                                                        onClick={handleAddHistory}
                                                    >
                                                        <FontAwesomeIcon icon={faCheck} /> Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 mt-3">
                        <div className="card" style={{ borderRadius: '7px' }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'gray' }}>Price Details:</h5>
                                <hr />
                                <div className="row">
                                    <div className="col">
                                        <p>Price</p>
                                    </div>
                                    <div className="col text-end">
                                        <p>₹{calculateTotalPrice()}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Actual Price</p>
                                    </div>
                                    <div className="col text-end text-success">
                                        <p>₹{dis()}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Discount</p>
                                    </div>
                                    <div className="col text-end text-success">
                                        <p>50% OFF</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Coupons For You</p>
                                    </div>
                                    <div className="col text-end text-success">
                                        <p>-₹40</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Delivery Charges</p>
                                    </div>
                                    <div className="col text-end text-success">
                                        <p>Free</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col">
                                        <p>Total Amount</p>
                                    </div>
                                    <div className="col text-end">
                                        <p>₹{calculateTotalPrice() - 40}</p>
                                    </div>
                                </div>
                                <hr />
                                <p className="text-success text-center">You will save money on this order!!</p>
                                <div className="d-grid gap-2">
                                    <Link to='/PlaceOrder'>
                                        <button
                                            onClick={navtoorder}
                                            className="btn btn-warning"
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            Place Order
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AddtoCart;

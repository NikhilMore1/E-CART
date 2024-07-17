import React, { useEffect, useState } from 'react';
import Navs from './Navs';
import axios from 'axios';
import '../components/css/history.css'; // Ensure this CSS file is responsive or adjust as necessary
import { Link } from 'react-router-dom';
import Footer from './Footer';

function LastHistory() {
    const [lastOrder, setLastOrder] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get("http://localhost:5000/api/history");
                setLastOrder(resp.data.product);
                console.log(lastOrder);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleRemove = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/history/${id}`);
            const con = confirm("Are you sure you want to delete this product?");
            if (con) {
                setProducts(products.filter(product => product._id !== id));
            }
        } catch (error) {
            console.log("Error removing product from history:", error);
        }
    };

    return (
        <div>
            <Navs />
            <div className="container mt-3 div-box">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Details</th>
                                <th>Order Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lastOrder.map(product => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.Heading}</td>
                                    <td>{product.Price}</td>
                                    <td><Link to={`/details/${product._id}`}>Details</Link></td>
                                    <td><button className="btn btn-danger" onClick={() => handleRemove(product._id)}>Cancel</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LastHistory;

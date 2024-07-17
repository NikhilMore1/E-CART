import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navs from './Navs';
import Footer from './Footer';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/search/${id}`);
            setProduct(response.data.product);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div><Navs/>
        <div className='card'>
            <Link to={`/Watchdetails/${product._id}`}><img src={product.image} className="card-img-top mt-4" alt={product.Heading} style={{height:'360px',width:'360px'}}/></Link>
          <div className="card-body" >
<h5 className="card-title" style={{color:'gray'}}><b>{product.Company}</b></h5>
<h5 className="card-title">{product.Heading}</h5>
<div className="row">
    <div className="col-4">
        <p><b>💲{product.Price}</b></p>
    </div>
    <div className="col">
        <p style={{color:'green',fontSize:'14px'}}> <b>{product.discount}</b></p>
    </div>
</div>
<div className="row">
    <p style={{color:'green',fontSize:'12px'}}> <b>{product.Dilivery}</b></p>
</div>
<div className="row">
    <div className="col-2">
   < div className="card-text" style={{border:'1px solid green', backgroundColor:'green',width:'50px',borderRadius:'5px',textAlign:'center',height:'30px',color:'white',fontWeight:'bold'}}>{product.Rating}⭐</div>
    </div>
    <div className="col">
    <div className="card-text" style={{border:'1px solid green', backgroundColor:'#ccebd4',width:'55px',borderRadius:'5px',textAlign:'center',height:'30px',color:'green',fontWeight:'bold',fontSize:'12px'}}>Hot Deal</div>
    </div>
</div>

{/* <Link to={`/details/${product._id}`}className="btn btn-primary">View more</Link> */}
</div>
            {/* Add more product details here */}
        </div>

        <Footer/>
        </div>
    );
}

export default ProductPage;

import { useEffect, useState } from "react";
import axios from "axios";
import Navs from "./Navs";
import assured from '../assets/img/assured.png';
import { Link } from "react-router-dom";
import '../App.css';
import Footer from "./Footer";

function WatchPage() {
    const [watch, setWatch] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/Watch");
            setWatch(resp.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return ( 
        <div>
            <Navs/>
        <div className="row mt-3" style={{ margin: '0 auto', padding: '40px', width: '100%',backgroundColor:'rgb(231, 238, 208)' }}>
        {
            watch.map(product=>(
                // eslint-disable-next-line react/jsx-key
                <div className="col-md-3 mt-3">
                   <div className="card">
<Link to={`/Watchdetails/${product._id}`}><img src={product.image} className="card-img-top" alt={product.Heading} height="250"/></Link>
<div className="card-body">
<h5 className="card-title" style={{color:'gray'}}><b>{product.Company}</b></h5>
<h5 className="card-title">{product.Heading}</h5>
<div className="row">
    <div className="col-4">
        <p><b>₹{product.Price}</b></p>
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
</div>

                </div>
            ))
        }
    </div>
    <Footer/>
    </div>
    );
}

export default WatchPage;

import { useEffect, useState } from "react";
import axios from "axios";
import Navs from "./Navs";
import assured from '../assets/img/assured.png';
import { Link } from "react-router-dom";
import '../App.css';
import Footer from "./Footer";

function Fasion() {
    const [watch, setWatch] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/Kurtas");
            setWatch(resp.data.product);
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
                <div className="col-md-3">
                   <div className="card mt-3" style={{width:'320px',padding:'10px'}}>
<Link to={`/FasionDetails/${product._id}`}><img src={product.image} className="card-img-top" alt={product.Heading} height="300"/></Link>
<div className="card-body">
<h6 className="card-title" style={{color:'gray'}}><b>{product.Company}</b></h6>
<h6 className="card-title">{product.Heading}</h6>
<p className="card-text" style={{color:'gray'}}><b><i>{product.color}</i></b></p>
<div className="row" style={{lineHeight:'0'}}>
    <div className="col-3" style={{marginLeft:'-3px'}}>
        <p><b>₹{product.Price}</b></p>
    </div>
    <div className="col-3" style={{lineHeight:'0.6'}}>
        <p style={{color:'green',fontSize:'14px'}}> <b>{product.discount}</b></p>
    </div>
    <div className="col" style={{lineHeight:'0.6'}}>
        <p style={{color:'green',fontSize:'14px'}}> <b>{product.free}</b></p>
    </div>
</div>
<div className="row">
    <p style={{color:'green',fontSize:'12px'}}> <b>{product.delivery}</b></p>
</div>
<div className="row">
    <div className="col">
    <div className="card-text" style={{border:'1px solid green', backgroundColor:'#ccebd4',width:'55px',borderRadius:'5px',textAlign:'center',height:'30px',color:'green',fontWeight:'bold',fontSize:'12px'}}>Hot Deal</div>
    </div>
</div>
<div className="row">
    <p className="card-text"> <span style={{color:'gray'}}> <b>Size:</b></span>{product.Size}</p>
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

export default Fasion;

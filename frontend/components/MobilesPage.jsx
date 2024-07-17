import { useEffect, useState } from "react";
import axios from "axios";
import Navs from "./Navs";
import assured from '../assets/img/assured.png';
import { Link } from "react-router-dom";
import '../App.css';
import Footer from "./Footer";

function MobilesPage() {
    const [mobiles, setMobiles] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/Mobile");
            setMobiles(resp.data.products);
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
            <div className="container-fluid" style={{ margin: '0 auto', padding: '40px', width: '100%',backgroundColor:'rgb(231, 238, 208)' }}>
                {mobiles.map((mobile) => (
                    <div className="row mb-4 mt-3" style={{border:'1px solid wheat',borderRadius:'5px', height:'16rem'}} key={mobile._id}>
                        <div className="col-md-3">
                            <img src={mobile.image} alt={mobile.Heading} className="img-fluid" height='150' width='200' style={{marginLeft:'5rem'}}/>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body" style={{lineHeight:'0.6'}}>
                               <Link to={`/details/${mobile._id}`} style={{textDecoration:'none',color:'black'}}> <h3 className="card-title mobilecss">{mobile.Heading}</h3></Link>
                                10000 Ratings & 1200 Reviews
                              <div className="mt-4">
                              <p className="card-text">Price: {mobile.Price}</p> 
                               <p className="card-text"> {mobile.Camera}</p> 
                                <p className="card-text"> {mobile.RamRom}</p> 
                                <p className="card-text"> {mobile.Battery}</p> 
                               <p className="card-text"> {mobile.Display}</p> 
                               <p className="card-text"> {mobile.Processor}</p>  
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{textAlign:'end'}}> 
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                    <h3>₹{mobile.Price}</h3> 
                                        </div>    
                                        <div className="col-3">
                                        <img src={assured} alt="flipcart" height='20' />
                                        </div>
                                </div>
                                <div className="row" style={{marginRight:'16rem',lineHeight:'0.9'}}>
                                <p style={{color:'grey',fontSize:'14px',fontWeight:'bold'}}>{mobile.discount}</p>
                                <p style={{color:'green',fontWeight:'bold',fontSize:'14px'}}>{mobile.delivery}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default MobilesPage;

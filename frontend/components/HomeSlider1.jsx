import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import assured from '../assets/img/assured.png';

// eslint-disable-next-line react/prop-types
const Card = ({ title, description }) => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const HomeSlider1 = () => {
    const [products,setProducts] = useState([]);
    const [books,setBooks] = useState([]);
    const [watch,setWatch] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/Kurtas");
            setProducts(resp.data.product);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDataWatch = async()=>{
        try{
            const resp = await axios.get("http://localhost:5000/api/Watch");
            setWatch(resp.data.product);
        }catch(error){
            console.log(error);
        }
    }

    const fetchDataBooks = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/books");
            setBooks(resp.data.product);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDatamob = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/Mobile");
            setMobiles(resp.data.products);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchData();
        fetchDataBooks();
        fetchDataWatch();
        fetchDatamob();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,

    };

    return (
        <div>
        <div className='' style={{ margin: '0 auto', padding: '40px', width: '100%' ,backgroundColor:'rgb(231, 238, 208)'}}>
            <div className="row" style={{border:'1px solid wheat',color:'gray',borderRadius:'10px'}}>
                <h3 style={{backgroundColor:'whitesmoke'}}>Fasion 👉🧚‍♂️🥽</h3>
            </div>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product._id}>
                         <div className="row">
                   <div className="card" style={{width:'320px'}}>
<Link to={`/FasionDetails/${product._id}`}><img src={product.image} className="card-img-top" alt={product.Heading} height="300"/></Link>
<div className="card-body">
<h6 className="card-title" style={{color:'gray'}}><b>{product.Company}</b></h6>
<h6 className="card-title">{product.Heading}</h6>
<p className="card-text" style={{color:'gray'}}><b><i>{product.color}</i></b></p>
<div className="row" style={{lineHeight:'0'}}>
    <div className="col-3" style={{marginLeft:'-3px'}}>
        <p><b>₹ {product.Price}</b></p>
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
                    </div>
                ))}
            </Slider>
</div>
<div className='' style={{ margin: '0 auto', padding: '40px', width: '100%',backgroundColor:'rgb(231, 238, 208)'}}>
<div className="row bg-white" style={{border:'1px solid wheat',color:'gray',borderRadius:'10px'}}>
                <h3 style={{backgroundColor:'whitesmoke'}}>Books and Comics 👉📚📖</h3>
            </div>
            <Slider {...settings}>
            {books.map((book) => (
                    <div key={book._id}>
                         <div className="row">
                   <div className="card" style={{width:'320px',height:'540px'}}>
<Link to={`/BookDetails/${book._id}`}><img src={book.image} className="card-img-top" alt={book.Heading} height="300"/></Link>
<div className="card-body">
<h6 className="card-title" style={{color:'gray'}}><b>{book.Company}</b></h6>
<h6 className="card-title">{book.Heading}</h6>
<p className="card-text" style={{color:'gray'}}><b><i>{book.color}</i></b></p>
<div className="row" style={{lineHeight:'0'}}>
    <div className="col-3" style={{marginLeft:'-3px'}}>
        <p><b>₹{book.Price}</b></p>
    </div>
    <div className="col-3" style={{lineHeight:'0.6'}}>
        <p style={{color:'green',fontSize:'14px'}}> <b>{book.discount}</b></p>
    </div>
    <div className="col" style={{lineHeight:'0.6'}}>
        <p style={{color:'green',fontSize:'14px'}}> <b>{book.free}</b></p>
    </div>
</div>
<div className="row">
    <p style={{color:'green',fontSize:'12px'}}> <b>{book.delivery}</b></p>
</div>
<div className="row">
    <div className="col">
    <div className="card-text" style={{border:'1px solid green', backgroundColor:'#ccebd4',width:'55px',borderRadius:'5px',textAlign:'center',height:'30px',color:'green',fontWeight:'bold',fontSize:'12px'}}>Hot Deal</div>
    </div>
</div>

{/* <Link to={`/details/${book._id}`}className="btn btn-primary">View more</Link> */}
</div>
</div>

                </div>
                    </div>
                ))}
            </Slider>
        </div>



        <div className='' style={{ margin: '0 auto', padding: '40px', width: '100%',backgroundColor:'rgb(231, 238, 208)' }}>
<div className="row" style={{border:'1px solid wheat',color:'gray',borderRadius:'10px'}}>
                <h3 style={{backgroundColor:'whitesmoke'}}>Mobiles,Tab's and Laptop's 👉💻📲</h3>
            </div>
            <Slider {...settings}>
            {mobiles.map((mobile) => (
                    <div key={mobile._id}>
                         <div className="row">
                   <div className="card" style={{width:'320px',height:'540px'}}>
<Link to={`/details/${mobile._id}`}><img src={mobile.image} className="card-img-top" alt={mobile.Heading} height="300"/></Link>
<div className="card-body">
<h6 className="card-title" style={{color:'gray'}}><b>{mobile.Company}</b></h6>
<h6 className="card-title">{mobile.Heading}</h6>

<div className="row">
 <div className="col" style={{color:'gray'}}>
 <p><b>{mobile.RamRom}</b></p>
    </div>   
</div>
<div className="row" style={{lineHeight:'0'}}>
    <div className="col-4" style={{marginLeft:'0px'}}>
        <p><b><span style={{marginLeft:'0px'}}>₹</span>{mobile.Price}</b></p>
    </div>
    <div className="col-4" style={{lineHeight:'0.6'}}>
        <p style={{color:'green',fontSize:'14px'}}> <b>{mobile.discount}</b></p>
    </div>
    <div className="col" style={{lineHeight:'0.6'}}>
        <p style={{color:'green',fontSize:'14px'}}> <b>{mobile.free}</b></p>
    </div>
</div>
<div className="row">
    <p style={{color:'green',fontSize:'12px'}}> <b>{mobile.delivery}</b></p>
</div>
<div className="row">
    <div className="col">
    <div className="card-text" style={{border:'1px solid green', backgroundColor:'#ccebd4',width:'55px',borderRadius:'5px',textAlign:'center',height:'30px',color:'green',fontWeight:'bold',fontSize:'12px'}}>Hot Deal</div>
    </div>
</div>

{/* <Link to={`/details/${mobile._id}`}className="btn btn-primary">View more</Link> */}
</div>
</div>

                </div>
                    </div>
                ))}
            </Slider>
        </div>



        
        </div>
    );
};

export default HomeSlider1;

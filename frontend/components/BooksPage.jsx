import { useEffect, useState } from "react";
import axios from "axios";
import Navs from "./Navs";
import assured from '../assets/img/assured.png';
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import Footer from "./Footer";

function BooksPage() {
    const [searchQuery,setSearchQuery] = useState('');
    const [watch, setWatch] = useState([]);
    const [products,setProducts] = useState([]);
    const [filterdProducts,setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    const fetchDataSearch = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/search");
            setProducts(resp.data.product);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/books");
            setWatch(resp.data.product);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchDataSearch();
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            const filtered = products.filter(product => product.Heading.toLowerCase().includes(query.toLowerCase()));
            const fil = Names.filter(pr=>pr.name.toLowerCase().includes(query.toLowerCase()));
            setFilteredProducts(filtered,fil);
            if(query==='watch'){
                navigate('/WatchPage');
            }
            if(query==='fasion'){
                navigate('/Fasion');
            }
        } else {
            setFilteredProducts([]);
        }
    };
    const handleProductClick = (id) => {
        navigate(`/ProductPage/${id}`);
    };
    return ( 
        <div>
            <Navs/>
        <div className="row mt-3" style={{ margin: '0 auto', padding: '40px', width: '100%',backgroundColor:'rgb(231, 238, 208)' }}>
        {
            watch.map(product=>(
                // eslint-disable-next-line react/jsx-key
                <div className="col-md-3 mt-3">
                   <div className="card" style={{width:'320px',height:'600px'}}>
<Link to={`/BookDetails/${product._id}`}><img src={product.image} className="card-img-top" alt={product.Heading} height="300"/></Link>
<div className="card-body">
<h6 className="card-title" style={{color:'gray',fontSize:'14px'}}><b>{product.Company}</b></h6>
<h6 className="card-title" style={{fontSize:'16px'}}>{product.Heading}</h6>
<p className="card-text" style={{color:'gray'}}><b><i>{product.color}</i></b></p>
<div className="row">
    <div className="col-3" style={{marginLeft:'0px'}}>
    <div className="card-text" style={{ border: '1px solid green', backgroundColor: 'green', width: '50px', borderRadius: '10px', textAlign: 'center', height: '30px', color: 'white', fontWeight: 'bold' }}> <span className="mt-5">{product.Rating}⭐</span></div>
    </div>
    <div className="col-3 mt-1" style={{lineHeight:'0.6'}}>
        <p style={{color:'gray',fontSize:'20px'}}> <b>(200)</b></p>
    </div>
</div>
<div className="row mt-2">
   <div className="col-3">
   <p style={{color:'black',fontSize:'20px'}}> <b>₹{product.Price}</b></p>
   </div>
   <div className="col-3">
    <p style={{textDecoration:'line-through',color:'gray',fontWeight:'bold',fontSize:'20px'}}>{product.discount}</p>
   </div>
   <div className="col">
    <p style={{color:'green',fontWeight:'bold'}}>{product.free}</p>
   </div>
</div>
<div className="row" style={{lineHeight:'0.7'}}>
    <p>{product.delivery}</p>
</div>
<div className="row">
    <div className="col">
    <div className="card-text" style={{border:'1px solid green', backgroundColor:'#ccebd4',width:'55px',borderRadius:'5px',textAlign:'center',height:'30px',color:'green',fontWeight:'bold',fontSize:'12px'}}>Hot Deal</div>
    </div>
</div>
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

export default BooksPage;

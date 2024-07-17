import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return ( 
        <div className="row text-bg-dark " style={{border:'1px solid black',borderRadius:'10px'}}>
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link" style={{textDecoration:'none',color:'white',fontSize:'17px',fontWeight:'bold'}}>About</button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/HomePage" className="nav-link">Contact us</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/devloper" className="nav-link">About us</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/Information" className="nav-link">Corporate News</Link></button>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link" style={{textDecoration:'none',color:'white',fontSize:'17px',fontWeight:'bold'}}>Group Company's</button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/HomePage" className="nav-link">Amazon</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/devloper" className="nav-link">Myntra</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/Information" className="nav-link">Flipcart</Link></button>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link" style={{textDecoration:'none',color:'white',fontSize:'17px',fontWeight:'bold'}}>HELP</button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/HomePage" className="nav-link">Payments</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/devloper" className="nav-link">Shipping</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/Information" className="nav-link">FAQ</Link></button>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link" style={{textDecoration:'none',color:'white',fontSize:'17px',fontWeight:'bold'}}>Consumer policy</button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/HomePage" className="nav-link">Terms Of use</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/devloper" className="nav-link">Security</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/Information" className="nav-link"> Privacy</Link></button>
                <button className="btn btn-link" style={{fontSize:'14px',textDecoration:'none',color:'white'}}><Link to="/Information" className="nav-link">Cancelation & Return</Link></button>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link" style={{textDecoration:'none',color:'white',fontSize:'17px',fontWeight:'bold'}}>Mail Us</button>
               <p style={{textAlign:'center',fontSize:'14px'}}>
                moren9817@gmail.com <br />
                ECart Private Limited,<br />
               Ghargaon,Sangamner Maharashtra <br />
               422620 India</p> <hr />
               <div className="col d-flex flex-column justify-content-center">
               <p style={{textAlign:'center',fontSize:'24px'}}>
                <div className="row" style={{textDecoration:'none'}}>
                    <div className="col" >
                        <a href="https://www.instagram.com/nikhil_more_98/">
                    <FontAwesomeIcon icon={faInstagram} style={{color:'red'}}/> </a>
                    </div>
                    <div className="col">
                        <a href="https://www.facebook.com/profile.php?id=100079894650019">
                    <FontAwesomeIcon icon={faFacebook}/> </a>
                    </div>
                    <div className="col">
                        <a href="https://www.linkedin.com/in/morenikhil123/">
                    <FontAwesomeIcon icon={faLinkedin}/> </a>
                    </div>
                </div>
              
               
              

               </p>
               </div>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                <button className="btn btn-link" style={{textDecoration:'none',color:'white',fontSize:'17px',fontWeight:'bold'}}>Office Address</button>
                <p style={{textAlign:'center',fontSize:'14px'}}>
                E-Cart Internet Private Limited, <br />
                Buildings Alyssa, Begonia & <br />
                Clove Embassy Tech Village, <br />
               Shivaji nagar, <br />
                Pune, 422621, <br />
                Maharashtra, India <br />
                CIN : U51109KA2012PTC066107 <br />
                Telephone: 044-45614700 / 044-67415800 <br />
                </p>
            </div><hr />
            
            <div className="d-flex justify-content-center align-items-center " style={{color:'blanchedalmond'}}>
                <span ><b><i>All right's are reserved  @Nikhil More</i></b></span><br />
                
            </div>
            <div className="d-flex justify-content-center align-items-center " style={{color:'blanchedalmond'}}>
                <span><b><i>@2024-2025</i></b></span>
            </div>

        </div>
     );
}

export default Footer;
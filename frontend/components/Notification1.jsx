import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Notification1() {
    return ( 
        <div className='login-page '>
        <div className='login-container'>
                <h1 className='login-header'><FontAwesomeIcon icon={faInfoCircle} style={{color:'green',fontSize:'100px'}}/></h1> 
                <h2 style={{textTransform:'uppercase',fontFamily:'fantasy',}}>Please Login first!</h2> 
                <p>Login Now For better experiance</p>
                <div className="row mt-3" >
                    <div className="col">
                    <button className="btn btn-primary"style={{backgroundColor:'blue',height:'40px',width:'100px',border:'1px solid black',borderRadius:'5px'}}><Link to='/Registration'> <span style={{color:'white',fontWeight:'bold'}}>Register</span></Link></button>       
                    </div>
                    <div className="col">
                    <button className="btn btn-primary" style={{backgroundColor:'blue',height:'40px',width:'100px',border:'1px solid black',borderRadius:'5px'}}><Link to='/Login'><span style={{color:'white',fontWeight:'bold'}}>Login</span></Link></button>
                    </div>
                </div>
                           
               
        </div>
        </div>
     );
}

export default Notification1;
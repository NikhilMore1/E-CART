
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function DashBoardMob() {
    const [Mobile, setMobile] = useState([]);

    const FetchData = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/Mobile");
            setMobile(resp.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        FetchData();
    }, []);

    return (
        <div className="row">
            {Mobile.map(product => (
                <div className="col-md-3" key={product._id}> {/* Added key prop */}
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.Heading} height="250" />
                        <div className="card-body">
                            <h5 className="card-title">{product.Heading}</h5>
                            <p className="card-title"><i>Just Rs: </i><span><b>{product.Price}</b></span></p>
                            <Link to={`/details/${product._id}`} className="btn btn-primary">View more</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DashBoardMob;
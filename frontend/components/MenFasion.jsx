import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, company, price, size, rating }) {
    return (
        <div className="card mx-2">
            <Link to={`/Watchdetails/${title}`}>
                <img src={image} className="card-img-top" alt={title} height="250" />
            </Link>
            <div className="card-body">
                <h5 className="card-title" style={{ color: 'gray' }}><b>{company}</b></h5>
                <h5 className="card-title">{title}</h5>
                <div className="row">
                    <div className="col-4">
                        <p><b>💲{price}</b></p>
                    </div>
                    <div className="col">
                        <p style={{ color: 'green', fontSize: '14px' }}> <b>{size}</b></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="card-text" style={{ border: '1px solid green', backgroundColor: 'green', width: '50px', borderRadius: '5px', textAlign: 'center', height: '30px', color: 'white', fontWeight: 'bold' }}>{rating}⭐</div>
                    </div>
                    <div className="col">
                        <div className="card-text" style={{ border: '1px solid green', backgroundColor: '#ccebd4', width: '55px', borderRadius: '5px', textAlign: 'center', height: '30px', color: 'green', fontWeight: 'bold', fontSize: '12px' }}>Hot Deal</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

import { useState } from 'react';
import '../components/css/phonepay.css';
import phonepay from '../assets/img/phonepay.jpg';
import Footer from './Footer';
import Navs from './Navs';

function PhonePay() {
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSendOTP = async () => {
        try {
            const fullMobileNumber = `+91${mobileNumber}`;
            const response = await fetch('http://localhost:5000/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mobile: fullMobileNumber }),
            });
            const data = await response.json();
            if (data.success) {
                alert('OTP Sent Successfully!');
            } else {
                alert('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Failed to send OTP. Please try again.');
        }
    };

    const handleInputChange = (e) => {
        setMobileNumber(e.target.value);
    };

    return ( <div>
        <Navs/>
    
        <div className="container-fluid body-col mt-4">
            <div className="con">
                <h3>Scan & Pay via Phone Pay</h3>
                <div className="qr">
                    <img src={phonepay} alt="phonepay" style={{height:'360px',width:'330px'}}/>
                </div>
                <p className="mt-4">OR</p>
                <h3>Enter Your Mobile Number</h3>
                <input
                className='mt-3'
                    type="tel"
                    value={mobileNumber}
                    style={{height:'40px',width:'20rem',border:'1px solid black',borderRadius:'10px',textAlign:'center'}}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    required
                />
                   <button className='mt-3' style={{height:'40px',width:'10rem',border:'1px solid black',borderRadius:'10px',backgroundColor:'purple',color:'white',fontWeight:'bold'}}onClick={handleSendOTP}>Send OTP</button>
            </div>
            <Footer/>
        </div>
    </div>
    );
}

export default PhonePay;

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cloudinary = require('cloudinary');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDb = require('./config');


var Namec = 'dkfakg7mw'; 
var key = '472725881526577';   
var sec = 'j5oQTkwakGjAq8jLCcDGiO2s7jM';  
cloudinary.config({ 
    cloud_name: Namec,  
    api_key: key,      
    api_secret:sec
}); 
     
// mongoose.connect("mongodb://localhost:27017/Capstone" )   
// .then(()=>console.log("connection established..")) 
// .catch(err=>console.log(err));  
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;   

   
       
app.use(express.json()); //parse data to json
app.use('/uploads', express.static('uploads')) //to access images in frontend
app.use(cors());  
connectDb().then(() => {  
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
                         
   
    app.use('/api/Mobile', require('./Routes/MobileProduct.route'));
    app.listen(process.env.PORT, () => {
        console.log(`Server running on process.env.PORT ${process.env.PORT}`);
    });       
}).catch(error => { 
    console.error("Failed to connect to MongoDB:", error);
});     
app.use('/api/Watch',require('./Routes/WatchProduct.route'));
app.use('/api/Kurtas',require('./Routes/fasion_brands_routes/MensKurtas.route'));
app.use('/api/Womens',require('./Routes/fasion_brands_routes/WomenDress.route'));
app.use('/api/Beauty',require('./Routes/Beauty.route'));
app.use('/api/Reg',require('./Routes/Log_Reg/Registration.route'));  
app.use('/api/cart',require('./Routes/cart.route'));
app.use('/api/history',require('./Routes/History.route')); 
app.use('/api/books',require('./Routes/books.route'));
app.use('/api/search',require('./Routes/Search.route')); 
app.use('/send-otp',require('./Routes/otp_generation.route'));
app.use('/api/elec',require('./Routes/electronics.route'));
// app.listen(process.env.PORT,()=>{
//     console.log(`Server started on port ${process.env.PORT}`);
// })          
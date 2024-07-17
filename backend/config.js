
// //ApjViN6gG2C2Nnqp

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://moren9817:ApjViN6gG2C2Nnqp@cluster0.we91adr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     } 
//   });
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }        
//   run().catch(console.dir); 

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://moren9817:lcGWg1sFp999z sYN@cluster0.we91adr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     await client.db("Capstone").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when      you finish/error
//     await client.close();
//   } 
// }
// run().catch(console.dir);      
  
    
  

const mongoose = require('mongoose');
    
const uri = "mongodb+srv://moren9817:lcGWg1sFp999zsYN@cluster0.we91adr.mongodb.net/Capstone?retryWrites=true&w=majority";

const connectDB = async () => {
    try { 
        await mongoose.connect(uri, {  
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
            socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
        });
        console.log("MongoDB connected!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);     
    }   
};

module.exports = connectDB;
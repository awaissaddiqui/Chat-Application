// mongodb+srv://process.env.DB_USERNAME:process.env.DB_PASSWORD@cluster0.3qeo4ah.mongodb.net/chatapp?retryWrites=true&w=majority
const express = require("express");
const mongoose= require("mongoose");
const userRoute = require("./routes/userRoute") 
const recRoute = require("./routes/recRoute")
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT || 3001;
const app = express();

const corsOption ={exposedHeaders:['Content-length', 'token', 'Authorization']} 
app.use(cors(corsOption))
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.3qeo4ah.mongodb.net/?retryWrites=true&w=majority`
,()=> console.log("connected to DB Successfully"));

app.use(express.json());
app.use("/user", userRoute)
app.use("/user/send", recRoute);
app.listen(PORT, ()=>console.log(`App is listening on PORT ${PORT}`)) 

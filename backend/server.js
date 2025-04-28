import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/FoodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// import uploads from './uploads'


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors()); //for accessing backend from frontend

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("working correctly");
})

app.listen(port,()=>{
    console.log(`Server listening to http://localhost:${port}`)
})

//mongodb+srv://naivedyab198:4nNSAwe9KAra7d0U@cluster0.ywbfp.mongodb.net/?


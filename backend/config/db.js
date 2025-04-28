// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://naivedyab198:4nNSAwe9KAra7d0U@cluster0.ywbfp.mongodb.net/food-del').then(()=>console.log("DB Connected"));

// }



import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
        console.error("MongoDB connection URI is not defined in environment variables.");
        process.exit(1); // exit the app if no URI is provided
    }

    try {
        await mongoose.connect(mongoURI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed:", error);
        process.exit(1); // exit app on failure
    }
};

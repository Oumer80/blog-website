import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors({
    origin:'https://congenial-garbanzo-7vpgqx79x5p9fwr4j-5173.app.github.dev',
    methods:['POST','PUT','GET','HEAD','OPTIONS','DELETE'],
    allowedHeaders:['Content-Type','Authorization', 'X-Custom-Head'],
    credentials:true,
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('Hello Oumer ')
})
connectDB()
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`.bold.yellow));

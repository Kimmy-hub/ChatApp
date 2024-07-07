import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongodb.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
  // to parse the incoming requests with JSON payloads (from req.body)
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Ankit Kumar");
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});

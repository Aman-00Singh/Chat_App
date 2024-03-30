import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userroutes.js";
import connect_mongo from "./db/connect_mongo.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);

app.use(express.json()); //to parse the incoming the requests with jsonpayload(req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connect_mongo();
  console.log(`Server is listening to ${PORT}`);
});

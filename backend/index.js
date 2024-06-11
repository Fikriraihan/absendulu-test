import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5500;
import userRoutes from "./routes/userRoutes.js";
import filmRoutes from "./routes/filmRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

connectDB();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors(corsOption));

app.get("/", (req, res) => res.send("Server is ready"));
app.use("/api/films", filmRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

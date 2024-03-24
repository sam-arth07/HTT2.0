import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   });


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extented: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", userRouter)

export { app }

import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { dbCon } from "./configs/dbCon.js";
import { UserRoute } from "./routes/userRoute.js";
import cors from 'cors' // cors use for solve cross origin error 
dotenv.config();
const app = express();
app.use(cors())
app.use(json(), urlencoded({ extended: true }));

app.use("/api", UserRoute);

const PORT = process.env.PORT;
dbCon(process.env.DB_URL);



app.listen(PORT, () => console.log(`==> http://localhost:${PORT}`));

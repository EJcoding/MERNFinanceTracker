import cors from "cors";
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
    "mongodb+srv://elijahespinosa:Tv9uwwgO8MtQVzaL@mernfinancetracker.zabseed.mongodb.net/";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MOBGODB!"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

    app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
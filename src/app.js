import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import "dotenv/config";



const app = express();

app.use(cors());
app.use(express.json())


// Create rouer api



// Ket noi database
mongoose.connect("mongodb+srv://Ductham087:Ductham087@quan-ly-phong-tro.xqyhmdl.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("successfully!");
});

app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công, cổng " + process.env.PORT);
});
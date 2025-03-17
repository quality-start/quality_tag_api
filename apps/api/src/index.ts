import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import poRoutes from "./routes/po";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/api/po", poRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

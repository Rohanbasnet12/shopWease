import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // Parse JSON requests

app.get("/", (req, res) => {
  res.json({ data: "Hello" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/test", (req, res) => {
  res.json("Chal to raha hai");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Live on port ${process.env.PORT} `);
});

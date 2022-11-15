import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/test", (req, res) => {
  res.json("Chal to raha hai");
});

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});
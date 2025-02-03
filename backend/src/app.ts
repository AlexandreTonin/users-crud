import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log("Server is Running on port", port);
});

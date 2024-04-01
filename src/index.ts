import express from "express";

const app = express();

app.get("/", (req, res) => res.json({ answer: 43 }));

app.listen(4000, () => {
  console.log("server running on port 4000");
});

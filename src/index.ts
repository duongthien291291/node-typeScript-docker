import express from "express";

const app = express();

app.get("/", (req, res) => res.json({ answer: 43 }));

app.listen(process.env.PORT || 80, () => {
  console.log("server running on port 80");
});

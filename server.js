import express from "express";
import dotenv from "dotenv/config";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This API is working... 🚀🚀");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) return res.status(400).json({ error: "Email cannot be empty" });
    if (!password)
      return res.status(400).json({ error: "Password cannot be empty" });

    res.status(201).json({ Message: "User Created Sucessfully" });
  } catch (error) {
    res
      .status(500)
      .json({ Error: "Internal Server Error", error: error.message });
  }
});
app.listen(port, () => {
  console.log(`This server is running on the 🚀 http://localhost:${port}`);
});

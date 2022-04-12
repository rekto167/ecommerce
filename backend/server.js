const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connecting database
connectDB();

app.get("/", (req, res) => res.send("API RUNNING"));

// Initial Middleware
app.use(express.json({ extend: true }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

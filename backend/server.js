const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const {username, password} = req.body;
    res.json({
        username,
        password,
    });
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
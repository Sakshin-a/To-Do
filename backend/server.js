const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

mongoose.connect('mongodb://localhost/todo',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
  const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const {username, password} = req.body;
    res.json({
        username,
        password,
    });
});



const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection-error'));
db.once('open',function(){ 
    app.listen(port, () => {
        console.log(`Listening at ${port}`);
    });
})
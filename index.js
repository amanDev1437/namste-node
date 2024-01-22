import express from "express";

const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log(`app is running at port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) =>{
    let num = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal:num})
});

app.get("/ig/:username", (req, res) =>{
    const followers = ["saksham","ashish",]
    let {username} = req.params
    res.render("instagram.ejs",{username, followers});
});
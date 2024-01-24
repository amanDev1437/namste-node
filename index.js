const express = require("express");
const path = require("path");
const {v4: uuidv4}  = require("uuid");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));


// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });

// app.get("/rolldice", (req, res) =>{
//     let num = Math.floor(Math.random()*6)+1;
//     res.render("rollDice.ejs",{diceVal:num})
// });

// app.get("/ig/:username", (req, res) =>{
//     const followers = ["saksham","ashish",]
//     let {username} = req.params
//     res.render("instagram.ejs",{username, followers});
// });

// app.get("/register", (req, res) =>{
//     let {user, password} = req.query;
//     res.send(`Get request, Welcome ${user}`);
    
// });

// app.post("/register",(req, res) =>{
//     let {user, password} = req.body;
//     res.send(`Post request, Welcome ${user}`);
// });

let posts = [
    {
        id: uuidv4(),
        username: "aman-singh",
        content: "I love Saksham Bhattarai"
    },
    {
        id:uuidv4(),
        username: "saksham-bhattarai",
        content: "I love Rohit Sharma and Aman Bhaiya"
    }
]


app.get("/posts", (req, res) =>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) =>{
    res.render("new.ejs");

});

app.post("/posts", (req, res) =>{
    let id = uuidv4();
    let {username, content} = req.body;
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("show.ejs",{post});
});

// app.patch("/posts/:id", (req, res) =>{
//     let {id} = req.params;
//     let newContent = res.body.content;

//     let post = posts.find((p) => id == p.id);
//     post.content = newContent;
//     console.log(content)
//     res.redirect("/posts");
// });

// app.get("/posts/:id/edit",(req, res) =>{
//     let {id} = req.params;
//     let post = posts.find((p) => id==p.id);
//     res.render("edit.ejs",{post});
// });

app.listen(port, () =>{
    console.log(`app is running at port ${port}`);
});
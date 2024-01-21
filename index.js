import express from "express";

const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log(`app is running at port ${port}`);
});

/*app.use((req, res) => {
    console.log("request coming");
    res.send("<h1>Fruits</h1><ul><li>Apple</li><li>Oranges</li></ul>");
});*/

app.get("/", (req, res) =>{
    res.send("This is root path");
});

app.get("/about", (req, res) => {
    res.send("This is about page");
});

/*app.get("*", (req, res) => {
    res.send("This page does not exist");
// });*/

app.get("/:username/:id", (req, res) =>{
    let {username, id} = req.params;
    res.send(`Welcome to the page of ${username}`)
});
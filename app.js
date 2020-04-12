const express =  require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const port = 4500 || process.env.port;

const app =  express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
//app.use(bodyParser.json());
app.listen(port,"127.0.0.1",console.log(`Server started! ${port}`));


let newItems = [];
let workItems =[];

app.get("/",(req,res)=>{
  
    //res.render("list", {kindOfday: globalDateDayYear(), EJSnewItem: newItems}); // <input type="text" name="newItem">
    res.render("list",{listTitle: date.globalDateDayYear(),newListItems: newItems});
        //res.write("<h1>NO weekend</h1>");
        //res.sendFile(__dirname + "/index.html");
        //res.send(today);
});


app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work list", newListItems: workItems});
});


app.post("/",(req,res)=>{
    
    const newItem = req.body.newItem;
   
    if (req.body.list === "Work list") {
        workItems.push(newItem);
        res.redirect("/work")
    } else {
        newItems.push(newItem);
        res.redirect('/');
    }

});


app.post("/work",(req,res)=>{

    const newItem =  req.body.newItem;
    workItems.push(newItem);
    res.redirect("/work");
});

app.get("/about",(req,res)=>{
    res.render("about");
});






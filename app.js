const express =  require("express");
const bodyParser = require("body-parser");

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
    res.render("list",{listTitle: currentDayStr(),EJSnewItem: newItems});
        //res.write("<h1>NO weekend</h1>");
        //res.send("No Weekend");
        //res.sendFile(__dirname + "/index.html");
        //res.send(today);
});


app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"work list", newListItems: workItems});
});


app.post("/",(req,res)=>{
    
    const newItem = req.body.newItem;
    newItems.push(newItem);
    res.redirect('/');
});


app.post("/work",(req,res)=>{

    const newItem =  req.body.newItem;
    workItems.push(newItem);
    res.redirect("/work");
});

function globalDateDayYear() {

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let today = new Date(); // Sat Apr 11 2020 14:43:05 GMT+0200 (Central European Summer Time)
    return Myday = today.toLocaleDateString("en-US",options);
}

function currentDayStr() {

    let today = new Date();
    let weekdays = ["monday","tuesday","wednesday","thurday","friday","saturday","sunday"];
    return day = weekdays[today.getDay()-1];
}


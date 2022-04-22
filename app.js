const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = "8000";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let today = new Date();
let items =[];




app.get('/', function(req, res){
    let options ={
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "2-digit"
    };
    
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        todaysDate: day,
        addNewItem: items
    });
});




app.post('/', function(req, res){

    let item = req.body.newItem;

     items.push(item);
     
    res.redirect('/')
})





function displayTime(){
    let dateTime = new Date();

    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    let sessions = "AM";

    if(hrs > 12){
        sessions = "PM"
        hrs = hrs - 12;
    }
    
    console.log(hrs + ":" + mins + ":"+ secs + " "+ sessions);

}



app.listen(port, function(){
    console.log("server started on port " + port);

});


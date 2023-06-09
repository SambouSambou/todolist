const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
const port = "8000";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", 
{useNewUrlParser: true});

const itemsSchema = {
    name : String
}

const Item = mongoose.model("Item", itemsSchema);
const item1 = new Item({
    name: "welcome to your todolist"
});

const item2 = new Item({
    name: "Hit + to enter to add a new item"
});

const item3 = new Item({
    name : "Click delete to delete an item"
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems).then(function () {
    console.log("Successfully saved default items to DB");
  }).catch(function (err) {
    console.log(err);
  });
  




app.get('/', function(req, res){
   
   

    res.render("list", {
        listTitle: "Today",
        addNewItem: items
       
    });

    
});


app.post('/', function(req, res){

    const item = req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect('/work')
    }else{
        items.push(item);
     
    res.redirect('/')
    }

     
});

app.get('/work', function(req, res){

    const day = date.getDate();

    res.render("list", 
    {
        listTitle: "Work List " + day,
        addNewItem: workItems
    } );

});

app.get('/about', function(req, res){
    res.render("about")
});



app.listen(port, function(){
    console.log("server started on port " + port);

});


//jshint esversion:6

const { set } = require("express/lib/application");

module.exports = getDate;


function getDate(){
    let today = new Date();

    let options ={
        weekday: "long",
        month: "long",
        day: "numeric",
        //year: "numeric",
        //hour: "numeric",
       // minute: "numeric",
       // second: "2-digit"
    };

    
    var day = today.toLocaleDateString("en-US", options);

    return day;

}



/*

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
*/
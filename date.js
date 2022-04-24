//jshint esversion:6





exports.getDate = function(){
    const today = new Date();

    const options ={
        weekday: "long",
        month: "long",
        day: "numeric",
        //year: "numeric",
        //hour: "numeric",
       // minute: "numeric",
       // second: "2-digit"
    };

    
    const day = today.toLocaleDateString("en-US", options);

    return day;

}





exports.displayTime = function(){
    const dateTime = new Date();

    const hrs = dateTime.getHours();
    const mins = dateTime.getMinutes();
    const secs = dateTime.getSeconds();
    const sessions = "AM";

    if(hrs > 12){
        sessions = "PM"
        hrs = hrs - 12;
    }
    
    console.log(hrs + ":" + mins + ":"+ secs + " "+ sessions);

}
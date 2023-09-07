let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)

let currentDate = new Date();
date.innerHTML = (currentDate.getDate()<10?"0":"") + currentDate.getDate();
month.innerHTML = (currentDate.getMonth()<10?"0":"") + currentDate.getMonth();
year.innerHTML = (currentDate.getFullYear()<10?"0":"") + currentDate.getFullYear();


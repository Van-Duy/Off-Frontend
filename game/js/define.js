let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');
let box4 = document.getElementById('box-4');


const TIME_MINUTE   = 0;
const TIME_SECOND   = 30;

let time_in_minutes     = TIME_MINUTE + TIME_SECOND/60;
let current_time        = Date.parse(new Date());
let deadline            = new Date(current_time + time_in_minutes*60*1000);
let paused              = false; 
let time_left;          
let timeinterval;

let flag            = false;
let winBox          = 0;
let elementTime     = document.getElementById('time');
let elementStart    = document.getElementById('start');

elementTime.innerHTML = TIME_MINUTE + ':' + TIME_SECOND; 
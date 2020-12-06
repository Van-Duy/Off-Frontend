getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setPosisonBox = () => {
    let topBox1 = getRandomInt(1,85);
    let topBox2 = getRandomInt(1,85);
    let topBox3 = getRandomInt(1,85);
    let topBox4 = getRandomInt(1,70);

    let leftBox1 = getRandomInt(1,85);
    let leftBox2 = getRandomInt(1,85);
    let leftBox3 = getRandomInt(1,85);
    let leftBox4 = getRandomInt(1,70);

    box1.style.left = leftBox1 + '%';
    box2.style.left = leftBox2+ '%';
    box3.style.left = leftBox3+ '%';
    box4.style.left = leftBox4+ '%';

    box1.style.top = topBox1+ '%';
    box2.style.top = topBox2+ '%';
    box3.style.top = topBox3+ '%';
    box4.style.top = topBox4+ '%';
}

funSetHeartWin = (winBox) => {
    if(winBox <= 3){
        for (let x = 1; x <= winBox; x++) {
            let elemBoxHeart = document.getElementById('heart-' + x);
            elemBoxHeart.style.backgroundColor = 'aqua';
        }
    }
    if(winBox == 0){
        for (let x = 1; x <= 3; x++) {
            let elemBoxHeart = document.getElementById('heart-' + x);
            elemBoxHeart.style.backgroundColor = 'transparent';
        }
    }
}



function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	function update_clock(){
        var t = time_remaining(endtime);
        if ( t.total < 1000 ) {
            id.innerHTML = "Time is up!";
            pauseGame();
            elementStart.setAttribute( "onClick", "javascript: showEnd();" );
            elementStart.innerHTML = 'Kết quả';
        } else {
            id.innerHTML = t.minutes+':' + t.seconds;
            if(t.total<=0){ clearInterval(timeinterval); }
        }
	}
	update_clock();
	timeinterval = setInterval(update_clock,1000);
}
function pause_clock(){
	if(!paused){
		paused = true;
		clearInterval(timeinterval); 
		time_left = time_remaining(deadline).total;
	}
}
function resume_clock(){
	if(paused){
		paused = false;
		deadline = new Date(Date.parse(new Date()) + time_left);
		run_clock(elementTime,deadline);
	}
}

setTimeStart = () => {
    time_in_minutes     = TIME_MINUTE + TIME_SECOND/60;
    current_time        = Date.parse(new Date());
    deadline            = new Date(current_time + time_in_minutes*60*1000);
    paused              = false; 
    time_left;          
    timeinterval;
}


pauseGame = () => {
    box1.style.cursor = 'auto';
    box2.style.cursor = 'auto';
    box3.style.cursor = 'auto';
    box4.style.cursor = 'auto';
}

playGame = () => {
    box1.style.cursor = 'pointer';
    box2.style.cursor = 'pointer';
    box3.style.cursor = 'pointer';
    box4.style.cursor = 'pointer';

}

disPlayBoxPlay = () => {
    box1.style.backgroundColor = 'transparent';
    box2.style.backgroundColor = 'transparent';
    box3.style.backgroundColor = 'transparent';
    box4.style.backgroundColor = 'transparent';
}

disPlayBoxWin = () => {
    box1.style.backgroundColor = 'yellow';
    box2.style.backgroundColor = 'aqua';
    box3.style.backgroundColor = 'royalblue';
    box4.style.backgroundColor = 'red';
}

setOnClick = () => {
    box1.setAttribute( "onClick", "javascript: funBoxWin('box-1');" );
    box2.setAttribute( "onClick", "javascript: funBoxWin('box-2');" );
    box3.setAttribute( "onClick", "javascript: funBoxWin('box-3');" );
    box4.setAttribute( "onClick", "javascript: funBoxLose('box-4');" );
}
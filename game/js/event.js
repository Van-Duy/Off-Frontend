funStart = () => {
    setPosisonBox();
    disPlayBoxPlay();
    playGame();
    setOnClick();
    resume_clock();
    elementStart.setAttribute( "onClick", "javascript: funPause();" );
    elementStart.innerHTML = 'Pause';
    flag = true;
}


funPause = () => {
    pause_clock();
    elementStart.setAttribute( "onClick", "javascript: funPlay();" );
    elementStart.innerHTML = 'Play';
    pauseGame();
    flag = false;
}

funPlay =() => {
    resume_clock();
    playGame();
    elementStart.setAttribute( "onClick", "javascript: funPause();" );
    elementStart.innerHTML = 'Pause';
    flag = true;
}

funBoxWin = (box) => {
    if(flag == true){
        winBox++;
        let eleBox = document.getElementById(box);
        eleBox.setAttribute( "onClick","");
        eleBox.style.backgroundColor = "yellow";
        funSetHeartWin(winBox);
        if(winBox == 3){
            alert('chúc mừng bạn đã chiến thắng  !!');
            pause_clock();
            pauseGame();
            elementStart.setAttribute( "onClick", "javascript: showEnd();" );
        elementStart.innerHTML = 'Kết quả';
        }
    }
}

funBoxLose = () => {
    if(flag == true){
        alert('bạn thua rồi !!');
        pause_clock();
        elementStart.setAttribute( "onClick", "javascript: showEnd();" );
        elementStart.innerHTML = 'Kết quả';
        flag = false;
    }
}

funPlayAgain = () => {
    pause_clock();
    elementTime.innerHTML = TIME_MINUTE + ':' + TIME_SECOND; 
    winBox = 0;
    funSetHeartWin(winBox);
    setTimeStart();
    pauseGame();
    run_clock(elementTime,deadline);
    pause_clock();
    elementStart.setAttribute( "onClick", "javascript: funStart();" );
    elementStart.innerHTML = 'Bắt đầu';
    flag = false;
}


showEnd = () => {
    disPlayBoxWin();
    pauseGame();
}
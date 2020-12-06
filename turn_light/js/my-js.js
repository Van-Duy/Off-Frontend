function changeImage() {
    var myVideo     = document.getElementById("video"); 
    var image       = document.getElementById('myImage');

    //1

    if (image.src.match("light-on")) {
        image.src = "imgs/light-of.gif";
        image.title = 'Bật đèn';
        myVideo.style.transitionDuration = "3s";
        myVideo.width = 900; 
        myVideo.height = 520; 
        document.body.style.backgroundColor = "black";
        
    } else {
      image.src = "imgs/light-on.gif";
      image.title = 'Tắt đèn';
      myVideo.width = 400; 
      myVideo.height = 315; 
      document.body.style.backgroundColor = 'white';
    }
  }
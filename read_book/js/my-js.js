var fontsize = 1;

function changeZoom(value) {
  var text = document.getElementById('text');
  if(value == 'in-zoom'){
    fontsize += 0.1;
	  text.style.fontSize = fontsize + "em";
  }else{
    fontsize -= 0.1;
	  text.style.fontSize = fontsize + "em";
  } 
}


function changeBackground(color){
  let text    = document.getElementById('text');
  let box     = document.getElementsByClassName('box-background');
  let element = document.getElementById(color);
  
  for (i = 0; i < box.length; i++) {
    box[i].classList.remove("active");
  }

  element.classList.add("active");

  switch (color) {
    case 'white':
      text.style.background = 'white';
      text.style.color = 'black';
        break;
    case 'black':
      text.style.background = 'black';
      text.style.color = 'white';
        break;
    case 'blue':
      text.style.background = 'blue';
      text.style.color = 'white';
        break;
    case 'yellow':
      text.style.background = 'yellow';
      text.style.color = 'black';
        break;
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var text = document.getElementById('text');
  //Khoảng cách dòng
  var line = document.getElementById('line-text');
  line.addEventListener('change', (event) => {
    let value = event.target.value;
    let line_height = 'none';
    switch (value) {
      case 'narrow':
        line_height = '20px' ;
        break;
      case 'nomal':
        line_height = '30px' ;
        break;
      case 'large':
        line_height = '40px' ;
        break;
      case 'default':
        line_height = '30px' ;
        break;
    }
    text.style.lineHeight = line_height;
  });

  // canh lề
  var line = document.getElementById('aign');
  line.addEventListener('change', (event) => {
    let value = event.target.value;
    let textAline ='none';
    switch (value) {
      case 'event':
        textAline = 'justify' ;
        break;
      case 'left':
        textAline = 'left' ;
        break;
      case 'right':
        textAline = 'right' ;
        break;
      case 'center':
        textAline = 'center' ;
        break;
      case 'default':
        textAline = 'none' ;
        break;
    }
    text.style.textAlign = textAline;
  });

});

document.addEventListener("DOMContentLoaded", function(event) { 
  var image=document.getElementsByClassName("img");
  for (i = 0; i < image.length; i++) {
    let value = (image[i].children)[0].src;
    value.onError= nofind();
    console.log(nofind())
   
  }

})

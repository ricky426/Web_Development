var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
 
var i = 0;

function goBack(num) {
    if(i <= 0) i = images.length; i--;
    document.querySelector("img").setAttribute("src", images[i]);
    
}

function goForward() {
    if(i>images.length -1) i = images.length; i++;
     if(i > images.length -1) i = 0;
    document.querySelector("img").setAttribute("src",images[i]);
}
let topbutton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 15 || document.documentElement.scrollTop > 15){
        topbutton.style.display = 'block';
    } else{
        topbutton.style.display = 'none';
    }
}

function topFunction(){
        document.documentElement.scrollTop = 0;
}

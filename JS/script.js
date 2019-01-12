//Change background color

var button = document.querySelector("button");


button.addEventListener("click", function() {
    if(isBlue){
        document.body.style.background = "white";
    }else {
        document.body.style.background = "blue";
    }
    isBlue = !isBlue;
});


button.addEventListener("click", function(){
    document.body.classList.toggle("blue");
} )



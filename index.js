for(var i = 0; i<document.querySelectorAll(".drum").length ;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){


    var key=this.innerHTML;

    playSound(key);
    buttonAnimation(key);
});

document.addEventListener("keydown",function(e){
    playSound(e.key);
    buttonAnimation(e.key);

});


function playSound(buttonInnerHTML){


    switch(buttonInnerHTML){

        case "w": var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        audio.volume=0.1;
        break;


        case "a":var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
        audio.volume=0.1;
        break;


        case "s":var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        audio.volume=0.1;
        break;

        case "d":var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
        audio.volume=0.1;
        break;


        case "j":var audio= new Audio("sounds/crash.mp3");
        audio.play();
        audio.volume=0.1;
        break;

        case "k":var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
        audio.volume=0.1;
        break;


        case "l": var audio= new Audio("sounds/snare.mp3");
        audio.play();
        audio.volume=0.1;
        break;

    }
}


function buttonAnimation(currentKey){

    var button = document.querySelector("."+currentKey);

  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
}
}
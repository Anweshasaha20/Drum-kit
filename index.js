
function a(){
    
   var b = this.innerHTML;
   makeSound(b);
   buttonAnimation(b);
   
}
for (var i =0 ;i < document.getElementsByClassName("drum").length ;i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click",a);
    
}

document.addEventListener("keypress",function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);

})

function makeSound(b){
switch (b) {
    case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":  
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":  
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":  
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":  
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "k":  
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        

   
}}
function buttonAnimation(current){
    var active = "."+current;
    document.querySelector(active).classList.add('pressed');
    setTimeout(function(){
        document.querySelector(active).classList.remove('pressed');
    }, 200);
    
}
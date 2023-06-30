
var numberOfSounds=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfSounds;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    playSound(this.textContent);
    buttonAnimation(this.textContent);
  });
  
}

document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  var char=event.key;
  playSound(char);
  buttonAnimation(char);
});

function playSound(src){
  if(src=='w'){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if(src=='a'){
    var audio=new Audio("sounds/kick-bass.mp3");
  audio.play();
  }
  else if(src=='s'){
    var audio=new Audio("sounds/snare.mp3");
  audio.play();
  }
  else if(src=='d'){
    var audio=new Audio("sounds/tom-1.mp3");
  audio.play();
  }
  else if(src=='j'){
    var audio=new Audio("sounds/tom-2.mp3");
  audio.play();
  }
  else if(src=='k'){
    var audio=new Audio("sounds/tom-3.mp3");
  audio.play();
  }
  else {
    var audio=new Audio("sounds/tom-4.mp3");
  audio.play();
  }
  
}

function buttonAnimation(src){
  var activeButton=document.querySelector("."+src);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
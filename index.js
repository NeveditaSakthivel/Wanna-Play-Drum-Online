for(var i=0;i<document.querySelectorAll("button").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var s = this.innerHTML;
    makesound(s);
    animation(s);
  });
}

 document.addEventListener("keydown", function(event){
   var keyname = event.key;
   makesound(keyname.toUpperCase());
   animation(keyname.toUpperCase());
});


function makesound(s)
{
  switch(s)
  {
    case 'W':
    var crash = new Audio('https://github.com/user/project/blob/main/audio/crash.mp3?raw=true');
    crash.play();
    break;
    case 'A':
    var kick = new Audio('kick-bass.mp3');
    kick.play();
    break;
    case 'S':
    var snare = new Audio('snare.mp3');
    snare.play();
    break;
    case 'D':
    var tom1 = new Audio('tom-1.mp3');
    tom1.play();
    break;
    case 'J':
    var tom2 = new Audio('tom-2.mp3');
    tom2.play();
    break;
    case 'K':
    var tom3 = new Audio('tom-3.mp3');
    tom3.play();
    break;
    case 'L':
    var tom4 = new Audio('tom-4.mp3');
    tom4.play();
    break;
  }}

  function animation(g)
  {
    var active = document.querySelector("." + g.toLowerCase());
    active.classList.add("animate");
    setTimeout(function() {
    active.classList.remove("animate");
  }, 100);
  }

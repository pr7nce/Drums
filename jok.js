for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var text= this.innerHTML;
    makesound(text);
    flash(text);
  });
}
document.addEventListener("keypress", function(event){
  makesound(event.key);
  flash(event.key);
});
 function makesound(key){
   switch (key) {
     case "w":
       var wp = new Audio("sounds/tom-1.mp3");
       wp.play();
       break;
     case "a":
       var ap = new Audio("sounds/tom-2.mp3");
       ap.play();
       break;
     case "s":
       var sp = new Audio("sounds/tom-3.mp3");
       sp.play();
       break;
     case "d":
       var dp = new Audio("sounds/tom-4.mp3");
       dp.play();
       break;
     case "j":
       var jp = new Audio("sounds/crash.mp3");
       jp.play();
       break;
     case "k":
       var kp = new Audio("sounds/kick-bass.mp3");
       kp.play();
       break;
     case "l":
       var lp = new Audio("sounds/snare.mp3");
       lp.play();
       break;
     default:

   }
 }
 function flash(jkey){
   var nokki= document.querySelector("."+jkey);
   nokki.classList.add("pressed");
   setTimeout(function(){
     nokki.classList.remove("pressed");
   }, 100);
 }

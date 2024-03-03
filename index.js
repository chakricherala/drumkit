// document.querySelectorAll("button").addEventListener("click", function (){
//     alert("I am clicked");
// })

const buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
  button.addEventListener('click', function() {

    press(this.innerHTML)

    buttonPress(this.innerHTML)
    
  });
});


  document.addEventListener("keypress", function(event){
    press(event.key)

    buttonPress(event.key)
  });

function press(key){
  switch (key){
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;  
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;  
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;  
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;  
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;  
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;  
    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  break;  
    default: console.log(key)

  }
}

function buttonPress(currentKey){
  var animal = document.querySelector("." + currentKey);
  animal.classList.add("pressed");

  setTimeout(function(){animal.classList.remove("pressed");},100);
}
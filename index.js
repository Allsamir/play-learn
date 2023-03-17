// Making Light & Dark Mode and their effects

var keyLength = document.querySelectorAll(".key");

document.querySelector(".dark").addEventListener("click", function () {

   document.querySelector("body").classList.remove("body-light");
   document.querySelector("body").classList.add("body-dark");

   for (var x = 0; x < keyLength.length; x++) {
      document.querySelectorAll(".key")[x].classList.remove("light-key");
      document.querySelectorAll(".key")[x].classList.add("dark-key");
   }
})

document.querySelector(".light").addEventListener("click", function () {

   document.querySelector("body").classList.remove("body-dark");
   document.querySelector("body").classList.add("body-light");

   for (var x = 0; x < keyLength.length; x++) {

      document.querySelectorAll(".key")[x].classList.remove("dark-key");
      document.querySelectorAll(".key")[x].classList.add("light-key");
   }
   
})

// Getting the keys Part

for (var x = 0; x < keyLength.length; x++) {

   document.querySelectorAll(".key")[x].addEventListener("click", function () {

      makeSound(this.innerHTML);
      buttonHoverAnimation(this.innerHTML);

   })
}

document.addEventListener("keydown", function (event) {
   var pressedKey = event.key;
   
   makeSoundOnKeyPress(pressedKey);
   buttonHoverAnimation(pressedKey);

})

// Sound Part

// Capital Letter Part || Click Part

function makeSound(letter) {

   switch (letter) {
      case "Q":
         var Q = new Audio('sounds/q for queen.mp3');
         Q.play();

         break;
      case "W":
         var W = new Audio('sounds/w for watch.mp3');
         W.play();

         break;
      case "E":
         var E = new Audio('sounds/E FOR EGG.mp3');
         E.play();

         break;
      case "R":
         var R = new Audio('sounds/r for rat.mp3');
         R.play();

         break;
      case "T":
         var T = new Audio('sounds/t for tree.mp3');
         T.play();

         break;
      case "Y":
         var Y = new Audio('sounds/y for yolk.mp3');
         Y.play();

         break;
      case "U":
         var U = new Audio('sounds/u for umbrella.mp3');
         U.play();

         break;
      case "I":
         var I = new Audio('sounds/I FOR Ice.mp3');
         I.play();

         break;
      case "O":
         var O = new Audio('sounds/O for ox.mp3');
         O.play();

         break;
      case "P":
         var P = new Audio('sounds/p for pen.mp3');
         P.play();

         break;
      case "A":
         var A = new Audio('sounds/A for Apple.mp3');
         A.play();

         break;
      case "S":
         var S = new Audio('sounds/s for snake.mp3');
         S.play();

         break;
      case "D":
         var D = new Audio('sounds/D FOR DOG.mp3');
         D.play();

         break;
      case "F":
         var F = new Audio('sounds/F for fan.mp3');
         F.play();

         break;
      case "G":
         var G = new Audio('sounds/G for gun.mp3');
         G.play();

         break;
      case "H":
         var H = new Audio('sounds/H for hen.mp3');
         H.play();

         break;
      case "J":
         var J = new Audio('sounds/j for jacket.mp3');
         J.play();

         break;
      case "K":
         var K = new Audio('sounds/k for key.mp3');
         K.play();

         break;
      case "L":
         var L = new Audio('sounds/l for lion.mp3');
         L.play();

         break;
      case "Z":
         var Z = new Audio('sounds/z for zebra.mp3');
         Z.play();

         break;
      case "X":
         var X = new Audio('sounds/x for x-ray.mp3');
         X.play();

         break;
      case "C":
         var C = new Audio('sounds/c for cat.mp3');
         C.play();

         break;
      case "V":
         var V = new Audio('sounds/v for vegetables.mp3');
         V.play();

         break;
      case "B":
         var B = new Audio('sounds/B for BALL.mp3');
         B.play();

         break;
      case "N":
         var N = new Audio('sounds/n for nest.mp3');
         N.play();

         break;
      case "M":
         var M = new Audio('sounds/m for mango.mp3');
         M.play();

         break;



      default:
         console.log(letter);
         break;
   }
}

// Pressed Key || Small Letter

function makeSoundOnKeyPress(mainKey) {

   switch (mainKey) {
      case "q":
         var Q = new Audio('sounds/q for queen.mp3');
         Q.play();

         break;
      case "w":
         var W = new Audio('sounds/w for watch.mp3');
         W.play();

         break;
      case "e":
         var E = new Audio('sounds/E FOR EGG.mp3');
         E.play();

         break;
      case "r":
         var R = new Audio('sounds/r for rat.mp3');
         R.play();

         break;
      case "t":
         var T = new Audio('sounds/t for tree.mp3');
         T.play();

         break;
      case "y":
         var Y = new Audio('sounds/y for yolk.mp3');
         Y.play();

         break;
      case "u":
         var U = new Audio('sounds/u for umbrella.mp3');
         U.play();

         break;
      case "i":
         var I = new Audio('sounds/I FOR Ice.mp3');
         I.play();

         break;
      case "o":
         var O = new Audio('sounds/O for ox.mp3');
         O.play();

         break;
      case "p":
         var P = new Audio('sounds/p for pen.mp3');
         P.play();

         break;
      case "a":
         var A = new Audio('sounds/A for Apple.mp3');
         A.play();

         break;
      case "s":
         var S = new Audio('sounds/s for snake.mp3');
         S.play();

         break;
      case "d":
         var D = new Audio('sounds/D FOR DOG.mp3');
         D.play();

         break;
      case "f":
         var F = new Audio('sounds/F for fan.mp3');
         F.play();

         break;
      case "g":
         var G = new Audio('sounds/G for gun.mp3');
         G.play();

         break;
      case "h":
         var H = new Audio('sounds/H for hen.mp3');
         H.play();

         break;
      case "j":
         var J = new Audio('sounds/j for jacket.mp3');
         J.play();

         break;
      case "k":
         var K = new Audio('sounds/k for key.mp3');
         K.play();

         break;
      case "l":
         var L = new Audio('sounds/l for lion.mp3');
         L.play();

         break;
      case "z":
         var Z = new Audio('sounds/z for zebra.mp3');
         Z.play();

         break;
      case "x":
         var X = new Audio('sounds/x for x-ray.mp3');
         X.play();

         break;
      case "c":
         var C = new Audio('sounds/c for cat.mp3');
         C.play();

         break;
      case "v":
         var V = new Audio('sounds/v for vegetables.mp3');
         V.play();

         break;
      case "b":
         var B = new Audio('sounds/B for BALL.mp3');
         B.play();

         break;
      case "n":
         var N = new Audio('sounds/n for nest.mp3');
         N.play();

         break;
      case "m":
         var M = new Audio('sounds/m for mango.mp3');
         M.play();

         break;

      default:
         console.log(letter);
         break;
   }
}

// Animation Part

function buttonHoverAnimation(hoverKey) {
   document.querySelector('.' + hoverKey).classList.add("pressed-key-1");

   setTimeout(function() {
      document.querySelector('.' + hoverKey).classList.remove("pressed-key-1");
   }, 300);
}



// SCORE
//FIRST PART TESTED AND WORKS
function score() {
  var points = 0
  var totalPoints = '';
  for var i = points; i < 0; i++;
  points += totalPoints
  return totalPoints
//THIS PART NEEDS TO BE TESTED
  var playerWord = document.getElementsByClass("box");
  if (playerWord = 3 || 4) {
    points += 1
  } else if (playerWord = 5) {
    points += 2
  } else if (playerWord = 6) {
    points += 3
  } else if (playerWord = 7) {
    points += 4
  } else if (playerWord >= 8 ) {
    points += 11
  }
//THIS FUNCTION NEEDS SOME IF STATEMENTS TO TAKE IN THE PLAYER INPUT(WORDS SELECTED)
// IF PLAYER WORD > 3 LETTERS SCORE += A NEW NUMBER
}
console.log(0,100);
document.getElementById('score').innerHTML = total;



// GENERATE RANDOM LETTERS working/tested
function randomLetters(ounce, abc) {
	var result = ''
  for (var i = ounce; i > 0; i--)
   result += abc[Math.round(Math.random('') * (abc.length - 1))];
    return result;
    }
    var show = function displayLetters(){
      document.getElementById('reset') = function randomLetters(){
      };
}
console.log(randomLetters(16, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
document.getElementsByClass('box').innerHTML


// SAMPLE LOOP FUNCTION TO GENERATE LETTERS IN 16 BOXES
// const createBoard = boardNumber => {
//   let result = []
//   for (i = 0; i < boardNumber; i ++) {
//     for (i = 0; i < boardNumber; i ++) {
//       let boardRow = []
//       let rowIndex = randomLetter()
//       boardRow.push(alphabet[rowIndex])
//     }
//     result.push(boardRow)
//   }
//   return result
// }

// TIMER WORKS
function timeLeft(duration, display) {
  var timer = threeMin, min, seconds
  setInterval(function time() {
    min = parseInt(timer / 60, 10)
    sec = parseInt(timer % 60, 10)

    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

    display.textContent = min + ":" + sec

    if (--timer < 0) {
      timer = threeMin
    }
  },1000)


  var showTime = window.onLoad
window.onLoad = function load() {
  var threeMinutes = 60 * 3,
    display = document.querySelector('#')
    startTimer(threeMinutes, display)
}
}




// NOT MY FUNCTION JUST A SAMPLE
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);
//
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//
//         display.textContent = minutes + ":" + seconds;
//
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
//
//  window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };

// var boxes = document.getElementsByClass('box');
// var letters = document.quereySelectorAll('.box')





// this is a sample not my function
// function myFunction() {
//     var x = document.getElementsByClassName("example");
//     document.getElementById("demo").innerHTML = x.length;

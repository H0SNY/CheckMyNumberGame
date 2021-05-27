"use strict";
//generates random number from 1 > 20
let getRandomNumber = () => Math.floor(Math.random() * 20 + 1);
let checkAction = () => {
  let inputValue = Number(input.value);
  if(!inputValue || inputValue > 20 || inputValue < 1)//if input is not a number or > 20 or < 1
  {
      output.textContent = "Enter Valid Number"

  }
  else
  { // if input is a number
    if(inputValue === random) //if right answer
    {
      myNumber.textContent = String(inputValue);
      let tempScore = Number(score.textContent);
      tempScore--;
      score.textContent = String(tempScore);
      output.textContent = "Correct Answer !";
      let tempHighScore = Number(highScore.textContent);
      if(tempScore > tempHighScore || tempHighScore == NaN){
        highScore.textContent = String(tempScore);
      }

    }
    else //if wrong answer
    {
      if(inputValue > random) output.textContent = "Too High";
      else output.textContent = "Too Low";
      let tempScore = Number(score.textContent);
      tempScore--;
      score.textContent = String(tempScore);

    }
  }
}

let startAgain = () => {
  output.textContent = "Try A Number";
  score.textContent = "20";
  myNumber.textContent = "";
  random = getRandomNumber();
};
let random = getRandomNumber();
let myNumber = document.querySelector('#mynumber');
let checkButton = document.querySelector('#checkbutton');
let againButton = document.querySelector('#againC');
let input = document.querySelector('#input');
let output =  document.querySelector('#output');
let score =  document.querySelector('#scorevalue');
let highScore =  document.querySelector('#highscorevalue');
checkButton.addEventListener('click' , function (){
checkAction()});

againButton.addEventListener('click' , function (){
  startAgain();
});

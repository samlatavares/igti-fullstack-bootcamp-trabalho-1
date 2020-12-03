var firstRange = null;
var secondRange = null;
var thirdRange = null;
var firstText = null;
var secondText = null;

function start() {
  addEvents();
  paintDiv();
}

function addEvents() {
  firstRange = document.querySelector('#firstRange');
  secondRange = document.querySelector('#secondRange');
  thirdRange = document.querySelector('#thirdRange');

  firstText = document.querySelector('#firstText');
  secondText = document.querySelector('#secondText');
  thirdText = document.querySelector('#thirdText');

  firstRange.addEventListener('input', fillFirstText);
  secondRange.addEventListener('input', fillSecondText);
  thirdRange.addEventListener('input', fillThirdText);
}

function fillFirstText(event) {
  firstText.value = event.target.value;
  paintDiv();
}

function fillSecondText(event) {
  secondText.value = event.target.value;
  paintDiv();
}

function fillThirdText(event) {
  thirdText.value = event.target.value;
  paintDiv();
}

function paintDiv() {
  var divColor = document.querySelector('#divColor');
  divColor.setAttribute(
    'style',
    'background-color:rgb(' +
    firstText.value +
    ',' +
    secondText.value +
    ',' +
    thirdText.value +
    ')'
  );
}

start();

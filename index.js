// Import stylesheets
import './style.css';

let inputCount = 3;
const inputsContainer = document.getElementById("inputs");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const sum = document.getElementById("result");

const adder = function() {
  let total = 0;
  const inputs = document.querySelectorAll("input[type='text']");
  inputs.forEach(input => {
    if (input.value) {
      total += parseInt(input.value);
    }
  });

  sum.innerHTML = `Sum: ${total}`;
};

const addInput = function () {
  inputCount++;
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.addEventListener('keyup', adder);
  const newLabel = document.createElement('label');
  newLabel.appendChild(document.createTextNode(`Number ${inputCount} `));
  inputsContainer.appendChild(newLabel);
  inputsContainer.appendChild(newInput);
  inputsContainer.appendChild(document.createElement('br'));
  inputsContainer.appendChild(document.createElement('br'));
};

const removeInput = function() {
  if (inputCount > 3) {
    inputCount--;
    inputsContainer.removeChild(inputsContainer.lastChild);
    inputsContainer.removeChild(inputsContainer.lastChild);
    inputsContainer.removeChild(inputsContainer.lastChild);
    inputsContainer.removeChild(inputsContainer.lastChild);
    
  }
  adder();
};

addBtn.addEventListener("click", addInput);
removeBtn.addEventListener("click", removeInput);
document.querySelectorAll("input[type='text']").forEach(input => {
  input.addEventListener("keyup", adder);
});





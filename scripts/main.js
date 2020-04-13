let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Noname_flat_calculator_-_printed_circuit_board_-_keyboard_side-2194.jpg') {
      myImage.setAttribute ('src','images/r_1933665_e3nej.jpg');
    } else {
      myImage.setAttribute ('src','images/Noname_flat_calculator_-_printed_circuit_board_-_keyboard_side-2194.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'New js things, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'New js things, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
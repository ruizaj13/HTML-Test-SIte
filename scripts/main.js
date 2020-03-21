let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/PinClipart.com_lightsaber-clipart_4976003.png') {
        myImage.setAttribute ('src','images/PikPng.com_lol-meme-face-png_5687263.png');
    } else {
        myImage.setAttribute ('src','images/PinClipart.com_lightsaber-clipart_4976003.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter thy name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome Meme Master, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome Meme Master, ' + storedName;
  }

 
  myButton.onclick = function() {
  setUserName();
}

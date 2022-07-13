let myImage = document.querySelector('img');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/lan-evo.jpg') {
    myImage.setAttribute('src','images/honda-s2000.png');
  }else{
    myImage.setAttribute('src','images/lan-evo.jpg')
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  }else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Lancer Evolution is cool, ' + myName;
  }
  localStorage.setItem('name', myName)
  myHeading.textContent = 'Lancer Evolution is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
}else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Lancer Evolution is cool, ' + storedName;
}

myButton.onclick = function(){
  setUserName();
}
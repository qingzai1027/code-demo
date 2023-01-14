let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Arecus.jpeg') {
    myImage.setAttribute('src', 'images/Arecus2.jpeg');
  } else {
    myImage.setAttribute('src', 'images/Arecus.jpeg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '欢迎你，' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎你，' + storedName;
}

myButton.onclick = function () {
  setUserName();
}
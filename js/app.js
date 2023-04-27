//create elements to hTML
let conteiner = document.createElement('div');
document.body.append(conteiner);
conteiner.className = 'conteiner';

let title = document.createElement('h1');
conteiner.append(title);
title.className = 'title';
title.innerText = 'Виртуальная клавиатура'

let text = document.createElement('textarea');
conteiner.append(text);
text.className = 'textarea';
text.id = 'textarea';

let keyboard = document.createElement('div');
conteiner.append(keyboard);
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';


let description = document.createElement('p');
conteiner.append(description);
description.className = 'description';
description.innerText = 'Клавиатура создана в операционной системе Mac OS'


let language = document.createElement('p');
conteiner.append(language);
language.className = 'language';
language.innerText = 'Для переключения языка комбинация: левыe ctrl + space';




//create keyboard itself
// let keyPress = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 13, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 167, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32, 16];
let keyPress = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "enter", 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', '' ,'ctrl', 'opt', 'cmd', 'space', 'left', 'down', 'right'];


// document.onkeypress = function(event) {
//  //console.log(event);
//  keyPress.push(event.charCode);
//  console.log(keyPress);
// };
function init() {
   let out = '';
   for (let i = 0; i < keyPress.length; i++) {
      out += '<div class="keyboard-key" data-key="' + keyPress[i] + '" >' + keyPress[i] + '</div>';
   };

   keyboard.innerHTML = out;
}
init();

let keys = document.querySelectorAll('.keyboard-key');
let spaceKey = document.querySelector('.keyboard-key[data-key="space"]');
let shiftRight = document.querySelector('.keyboard-key[data-key="shift"]');
let shiftLeft = document.querySelector('.keyboard-key[data-key="shift"]');
let capsLock = document.querySelector('.keyboard-key[data-key="caps lock"]');
let backSpace = document.querySelector('.keyboard-key[data-key="backspace"]');
let tab = document.querySelector('.keyboard-key[data-key="tab"]');
let enter = document.querySelector('.keyboard-key[data-key="enter"]');
let control = document.querySelector('.keyboard-key[data-key="ctrl"]');
let option = document.querySelector('.keyboard-key[data-key="opt"]');
let command = document.querySelector('.keyboard-key[data-key="cmd"]');
let left = document.querySelector('.keyboard-key[data-key="left"]');
let up = document.querySelector('.keyboard-key[data-key="up"]');
let down = document.querySelector('.keyboard-key[data-key="down"]');
let right = document.querySelector('.keyboard-key[data-key="right"]');

up.innerHTML = '<img src ="../icons/117461.png" style="width: 20px">';
down.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(180deg)">';
left.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(-90deg)">';
right.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(90deg)">';


document.querySelector('.textarea').addEventListener('keydown', e => {
   console.log(e)
});

for (let i = 0; i < keys.length; i++) {
   // keys[i].setAttribute('keyname', keys[i].innerText);
   keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (e) {
   for (let i = 0; i < keys.length; i++) {
      if (e.key == keys[i].getAttribute('data-key') || e.key == keys[i].getAttribute('lowerCaseName')) {
         keys[i].classList.add('active')
      }
      if (e.code == 'Space') {
         spaceKey.classList.add('active')
      }
      if (e.code == 'ShiftLeft') {
         shiftLeft.classList.add('active')
      }
      if (e.code == 'ShiftRight') {
         shiftRight.classList.add('active')
      }
      if (e.code == 'CapsLock') {
         capsLock.classList.add('active');
      }
      if (e.code == 'Backspace') {
         backSpace.classList.add('active');
      }
      if (e.code == 'Tab') {
         tab.classList.add('active');
      }
      if (e.code == 'Enter') {
         enter.classList.add('active');
      }
      if (e.code == 'ControlLeft') {
         control.classList.add('active');
      }
      if (e.code == 'AltLeft') {
         option.classList.add('active');
      }
      if (e.code == 'MetaLeft') {
         command.classList.add('active');
      }
      if (e.code == 'ArrowLeft') {
         left.classList.add('active');
      }
      if (e.code == 'ArrowUp') {
         up.classList.add('active');
      }
      if (e.code == 'ArrowDown') {
         down.classList.add('active');
      }
      if (e.code == 'ArrowRight') {
         right.classList.add('active');
      }
   }
})

window.addEventListener('keyup', function (e) {
   for (let i = 0; i < keys.length; i++) {
      if (e.key == keys[i].getAttribute('data-key') || e.key == keys[i].getAttribute('lowerCaseName')) {
         keys[i].classList.remove('active');
         // keys[i].classList.add('remove')
      }
      if (e.code == 'Space') {
         spaceKey.classList.remove('active');
         // spaceKey.classList.add('remove');
      }
      if (e.code == 'ShiftLeft') {
         shiftRight.classList.remove('active');
         // shiftRight.classList.remove('remove')
      }
      if (e.code == 'ShiftRight') {
         shiftLeft.classList.remove('active');
         // shiftLeft.classList.remove('remove')
      }
      if (e.code == 'CapsLock') {
         capsLock.classList.remove('active');
      }
      if (e.code == 'Backspace') {
         backSpace.classList.remove('active');
      }
      if (e.code == 'Tab') {
         tab.classList.remove('active');
      }
      if (e.code == 'Enter') {
         enter.classList.remove('active');
      }
      if (e.code == 'ControlLeft') {
         control.classList.remove('active');
      }
      if (e.code == 'AltLeft') {
         option.classList.remove('active');
      }
      if (e.code == 'MetaLeft') {
         command.classList.remove('active');
      }
      if (e.code == 'ArrowLeft') {
         left.classList.remove('active');
      }
      if (e.code == 'ArrowUp') {
         up.classList.remove('active');
      }
      if (e.code == 'ArrowDown') {
         down.classList.remove('active');
      }
      if (e.code == 'ArrowRight') {
         right.classList.remove('active');
      }
      // setTimeout(() => {
      //    keys[i].classList.remove('remove')
      // }, 200)
   }
});

// document.onkeypress = function (event) {
//    console.log(event.code);
//    console.log(event.keyCode);
//    document.querySelectorAll('.keyboard .keyboard-key').forEach(function (element) {
//       element.classList.remove('active');
//    });
//    document.querySelector('.keyboard .keyboard-key[data="' + event.keyCode + '"]').classList.add('active');
// };

// document.querySelectorAll('.keyboard .keyboard-key').forEach(function (element) {
//    element.onclick = function (event) {
//       document.querySelectorAll('.keyboard .keyboard-key').forEach(function (element) {
//          element.classList.remove('active');
//       });
//       let code = this.getAttribute('data');
//       this.classList.add('active');
//       console.log(code);
//    }
// });

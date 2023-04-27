//create elements to hTML
let conteiner = document.createElement('div');
document.body.append(conteiner);
conteiner.className = 'conteiner';

let title = document.createElement('p');
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
let keyPress = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', "enter", 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'shift', 'ctrl', 'opt', 'cmd', 'space', 'left', 'down', 'right'];


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



document.querySelector('.textarea').addEventListener('keydown', e => {
   console.log(e)
});

for (let i = 0; i < keys.length; i++) {
   keys[i].setAttribute('keyname', keys[i].innerText);
   keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (e) {
   for (let i = 0; i < keys.length; i++) {
      if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
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
   }
})

window.addEventListener('keyup', function (e) {
   for (let i = 0; i < keys.length; i++) {
      if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
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
         capsLock.classList.add('active');
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

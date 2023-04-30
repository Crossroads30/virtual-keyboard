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
text.setAttribute('autofocus', '');

let keyboard = document.createElement('div');
conteiner.append(keyboard);
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';

let keyboardRus = document.createElement('div');
conteiner.append(keyboardRus);
keyboardRus.className = 'keyboard-rus';
keyboard.id = 'keyboard-rus';

let nightMode = document.createElement('div');
conteiner.append(nightMode);
nightMode.className = 'night-mode';

nightMode.innerHTML = '<div class="toggle-circle"><dive>'

let description = document.createElement('p');
conteiner.append(description);
description.className = 'description';
description.innerText = 'Клавиатура создана в операционной системе Mac OS.'


let language = document.createElement('p');
conteiner.append(language);
language.className = 'language';
language.innerText = 'Для переключения языка - комбинация клавиш "shift" + "control".';


keyboard.classList.add('eng');

//creating rus symbols

let keySymbolsRus = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'з', 'х', 'ъ', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", "Enter", 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'up', 'Clear', 'Contr', 'Opt', 'Cmd', 'Space', 'left', 'down', 'right'];

function createKeyButtonsRus() {
   let rusButtons = '';
   for (let i = 0; i < keySymbolsRus.length; i++) {
      rusButtons += '<div class="keyboard-key-ru" data-keyrus="' + keySymbolsRus[i] + '" >' + keySymbolsRus[i] + '</div>';
   };
   keyboardRus.innerHTML = rusButtons;
}
createKeyButtonsRus();

//create keyboard itself
let keySymbolsEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter", 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'Clear', 'Contr', 'Opt', 'Cmd', 'Space', 'left', 'down', 'right'];



function createKeyButtonsEng() {
   let engButton = '';
   for (let i = 0; i < keySymbolsEng.length; i++) {
      engButton += '<div class="keyboard-key in-lower-case" data-key="' + keySymbolsEng[i] + '" >' + keySymbolsEng[i] + '</div>';
   };
   keyboard.innerHTML = engButton;
};
createKeyButtonsEng();


const keys = document.querySelectorAll('.keyboard-key');
const spaceKey = document.querySelector('.keyboard-key[data-key="Space"]');
const shiftLeft = document.querySelector('.keyboard-key[data-key="Shift"]');
const capsLock = document.querySelector('.keyboard-key[data-key="Caps Lock"]');
const backSpace = document.querySelector('.keyboard-key[data-key="Backspace"]');
const tab = document.querySelector('.keyboard-key[data-key="Tab"]');
const del = document.querySelector('.keyboard-key[data-key="Del"]');
const enter = document.querySelector('.keyboard-key[data-key="Enter"]');
const control = document.querySelector('.keyboard-key[data-key="Contr"]');
const option = document.querySelector('.keyboard-key[data-key="Opt"]');
const command = document.querySelector('.keyboard-key[data-key="Cmd"]');
const left = document.querySelector('.keyboard-key[data-key="left"]');
const up = document.querySelector('.keyboard-key[data-key="up"]');
const down = document.querySelector('.keyboard-key[data-key="down"]');
const right = document.querySelector('.keyboard-key[data-key="right"]');

const keysRu = document.querySelectorAll('.keyboard-key-ru');
const spaceKeyRu = document.querySelector('.keyboard-key-ru[data-keyrus="Space"]');
const shiftLeftRu = document.querySelector('.keyboard-key-ru[data-keyrus="Shift"]');
const capsLockRu = document.querySelector('.keyboard-key-ru[data-keyrus="Caps Lock"]');
const backSpaceRu = document.querySelector('.keyboard-key-ru[data-keyrus="Backspace"]');
const tabRu = document.querySelector('.keyboard-key-ru[data-keyrus="Tab"]');
const delRu = document.querySelector('.keyboard-key-ru[data-keyrus="Del"]');
const enterRu = document.querySelector('.keyboard-key-ru[data-keyrus="Enter"]');
const controlRu = document.querySelector('.keyboard-key-ru[data-keyrus="Contr"]');
const optionRu = document.querySelector('.keyboard-key-ru[data-keyrus="Opt"]');
const commandRu = document.querySelector('.keyboard-key-ru[data-keyrus="Cmd"]');
const leftRus = document.querySelector('.keyboard-key-ru[data-keyrus="left"]');
const upRus = document.querySelector('.keyboard-key-ru[data-keyrus="up"]');
const downRus = document.querySelector('.keyboard-key-ru[data-keyrus="down"]');
const rightRus = document.querySelector('.keyboard-key-ru[data-keyrus="right"]');
const circle = document.querySelector('.toggle-circle');
const body = document.querySelector('.body');

up.innerHTML = '<img class="icon" src ="../icons/117461.png" style="width: 20px">';
down.innerHTML = '<img class="icon" src ="../icons/117461.png" style="width: 20px; transform: rotate(180deg)">';
left.innerHTML = '<img class="icon" src ="../icons/117461.png" style="width: 20px; transform: rotate(-90deg)">';
right.innerHTML = '<img class="icon" src ="../icons/117461.png" style="width: 20px; transform: rotate(90deg)">';


upRus.innerHTML = '<img class="icon" src ="../icons/117461.png" style="width: 20px">';
downRus.innerHTML = '<img class="icon" src ="../icons/117461.png" style="width: 20px; transform: rotate(180deg)">';
leftRus.innerHTML = '<img class="icon" src ="../icons/117461.png" style="width: 20px; transform: rotate(-90deg)">';
rightRus.innerHTML = '<img class="icon" src ="../icons/117461.png" style="width: 20px; transform: rotate(90deg)">';

const icon = document.querySelectorAll('.icon');

//identifying of key codes
// document.querySelector('.textarea').addEventListener('keydown', e => {
//    console.log(e)
// });

//add hilights when 'keydown' 
window.addEventListener('keydown', function (e) {
   for (let i = 0; i < keys.length; i++) {
      if (e.key == keys[i].getAttribute('data-key')) {
         keys[i].classList.add('active');
      };
      if (e.code == 'Space') {
         spaceKey.classList.add('active')
      };
      if (e.code == 'ShiftLeft') { 
         shiftLeft.classList.add('active')
      };
      if (e.code == 'CapsLock' && keys[i].innerText.length === 1) {
         capsLock.classList.add('active');
         keys[i].innerText = keys[i].innerText.toUpperCase();
         keys[i].setAttribute('data-key', keys[i].innerText);
      };
      if (e.code == 'Backspace') {
         backSpace.classList.add('active');
      };
      if (e.code == 'Tab') {
         tab.classList.add('active');
      };
      if (e.code == 'Delete') {
         del.classList.add('active');
      };
      if (e.code == 'Enter') {
         enter.classList.add('active');
      };
      if (e.code == 'ControlLeft') {
         control.classList.add('active');
      };
      if (e.code == 'AltLeft') {
         option.classList.add('active');
      };
      if (e.code == 'MetaLeft') {
         command.classList.add('active');
      };
      if (e.code == 'ArrowLeft') {
         left.classList.add('active');
      };
      if (e.code == 'ArrowUp') {
         up.classList.add('active');
      };
      if (e.code == 'ArrowDown') {
         down.classList.add('active');
      };
      if (e.code == 'ArrowRight') {
         right.classList.add('active');
      };

   };
});

//remove hilights when 'keyup'
window.addEventListener('keyup', function (e) {
   for (let i = 0; i < keys.length; i++) {
      if (e.key == keys[i].getAttribute('data-key')) {
         keys[i].classList.remove('active');
      }
      if (e.code == 'Space') {
         spaceKey.classList.remove('active');
      }
      if (e.code == 'ShiftLeft') {
         shiftLeft.classList.remove('active');
      }
      if (e.code == 'CapsLock' && keys[i].innerText.length === 1) {
         capsLock.classList.remove('active');
         keys[i].innerText = keys[i].innerText.toLowerCase();
         keys[i].setAttribute('data-key', keys[i].innerText);
      }
      if (e.code == 'Backspace') {
         backSpace.classList.remove('active');
      }
      if (e.code == 'Tab') {
         tab.classList.remove('active');
      }
      if (e.code == 'Delete') {
         del.classList.remove('active');
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
   };
});

//add hilights for rus language when 'keydown' 
window.addEventListener('keydown', function (e) {
   for (let i = 0; i < keysRu.length; i++) {
      if (e.key == keysRu[i].getAttribute('data-keyrus')) {
         keysRu[i].classList.add('active');
      }
      if (e.code == 'Space') {
         spaceKeyRu.classList.add('active');
      }
      if (e.code == 'ShiftLeft') {
         shiftLeftRu.classList.add('active')
      }
      if (e.code == 'CapsLock' && keysRu[i].innerText.length === 1) {
         capsLockRu.classList.add('active');
         keysRu[i].innerText = keysRu[i].innerText.toUpperCase();
         keysRu[i].setAttribute('data-keyrus', keysRu[i].innerText);
      }
      if (e.code == 'Backspace') {
         backSpaceRu.classList.add('active');
      }
      if (e.code == 'Tab') {
         tabRu.classList.add('active');
      }
      if (e.code == 'Delete') {
         delRu.classList.add('active');
      }
      if (e.code == 'Enter') {
         enterRu.classList.add('active');
      }
      if (e.code == 'ControlLeft') {
         controlRu.classList.add('active');
      }
      if (e.code == 'AltLeft') {
         optionRu.classList.add('active');
      }
      if (e.code == 'MetaLeft') {
         commandRu.classList.add('active');
      }
      if (e.code == 'ArrowLeft') {
         leftRus.classList.add('active');
      }
      if (e.code == 'ArrowUp') {
         upRus.classList.add('active');
      }
      if (e.code == 'ArrowDown') {
         downRus.classList.add('active');
      }
      if (e.code == 'ArrowRight') {
         rightRus.classList.add('active');
      }
   };
});

//remove hilights for rus language when 'keyup'
window.addEventListener('keyup', function (e) {
   for (let i = 0; i < keysRu.length; i++) {
      if (e.key == keysRu[i].getAttribute('data-keyrus')) {
         keysRu[i].classList.remove('active');
      }
      if (e.code == 'Space') {
         spaceKeyRu.classList.remove('active');
      }
      if (e.code == 'ShiftLeft') {
         shiftLeftRu.classList.remove('active');
      }
      if (e.code == 'CapsLock' && keysRu[i].innerText.length === 1) {
         capsLockRu.classList.remove('active');
         keysRu[i].innerText = keysRu[i].innerText.toLowerCase();
         keysRu[i].setAttribute('data-keyrus', keysRu[i].innerText);
      }
      if (e.code == 'Backspace') {
         backSpaceRu.classList.remove('active');
      }
      if (e.code == 'Tab') {
         tabRu.classList.remove('active');
      }
      if (e.code == 'Delete') {
         delRu.classList.remove('active');
      }
      if (e.code == 'Enter') {
         enterRu.classList.remove('active');
      }
      if (e.code == 'ControlLeft') {
         controlRu.classList.remove('active');
      }
      if (e.code == 'AltLeft') {
         optionRu.classList.remove('active');
      }
      if (e.code == 'MetaLeft') {
         commandRu.classList.remove('active');
      }
      if (e.code == 'ArrowLeft') {
         leftRus.classList.remove('active');
      }
      if (e.code == 'ArrowUp') {
         upRus.classList.remove('active');
      }
      if (e.code == 'ArrowDown') {
         downRus.classList.remove('active');
      }
      if (e.code == 'ArrowRight') {
         rightRus.classList.remove('active');
      }
   };
});

//local storage
if (localStorage.getItem('lang') !== 'rus') {
   keyboardRus.classList.add('hidden');
} else {
   keyboard.classList.add('hidden');
}

//function for languages to change
window.addEventListener('keydown', function (e) {
   if (e.code == 'ShiftLeft') { // change language when 'shift'+'control' is down 
      if (e.ctrlKey) {
         if (keyboardRus.classList.contains('hidden')) {
            keyboardRus.classList.remove('hidden');
            keyboard.classList.add('hidden');
            localStorage.setItem('lang', 'rus');
         } else if (keyboard.classList.contains('hidden')) {  
            keyboard.classList.remove('hidden');
            keyboardRus.classList.add('hidden');
            localStorage.setItem('lang', 'eng');
         };
         return;
      };
   };
});

//implement letters to 'textarea' when clicking on virtual keyboard
[...keys].forEach(item => item.addEventListener('click', function (event) {
   if (event.target.dataset.key !== 'Shift' && event.target.dataset.key !== 'Cmd'
      && event.target.dataset.key !== 'Contr' && event.target.dataset.key !== 'Opt'
      && event.target.dataset.key !== 'Enter' && event.target.dataset.key !== 'Del'
      && event.target.dataset.key !== 'Backspace' && event.target.dataset.key !== 'Tab'
      && event.target.dataset.key !== 'Caps Lock' && event.currentTarget.dataset.key !== 'up'
      && event.currentTarget.dataset.key !== 'down' && event.currentTarget.dataset.key !== 'left'
      && event.currentTarget.dataset.key !== 'right' && event.target.dataset.key !== 'Space') {
      text.value += event.target.dataset.key;
   };

   for (let i = 0; i < keys.length; i++) {
      if (event.target.dataset.key == 'Caps Lock' && keys[i].innerText.length === 1
         && keys[i].classList.contains('in-lower-case')) {
         keys[i].innerText = keys[i].innerText.toUpperCase();
         keys[i].setAttribute('data-key', keys[i].innerText);
         keys[i].classList.add('in-upper-case');
         keys[i].classList.remove('in-lower-case');
      } else if (event.target.dataset.key == 'Caps Lock' && keys[i].classList.contains('in-upper-case')) {
         keys[i].classList.remove('in-upper-case');
         keys[i].classList.add('in-lower-case');
         keys[i].innerText = keys[i].innerText.toLowerCase();
         keys[i].setAttribute('data-key', keys[i].innerText);
      };
   };

   if (event.target.dataset.key == 'Space') {
      text.value += ' ';
   };
   if (event.target.dataset.key == 'Enter') {
      text.value += '\n';
   };
   if (event.target.dataset.key == 'Clear') {
      text.value = ' ';
   };
   if (event.target.dataset.key == 'Backspace') {
      // let currentIndex = text.selectionStart;
      text.value = text.value.slice(0, -1);
      // text.value = `${text.value.slice(0, currentIndex - 1)}${text.value.slice(currentIndex, text.value.length)}`
      // return
   };
   if (event.target.dataset.key == 'Del') {
      text.value = text.value.slice(1, -1);
   };
   if (event.currentTarget.dataset.key == 'left') {
      text.value += '◄';
   };
   if (event.currentTarget.dataset.key == 'right') {
      text.value += '►';
   };
   if (event.currentTarget.dataset.key == 'down') {
      text.value += '▼';
   };
   if (event.currentTarget.dataset.key == 'up') {
      text.value += '▲';
   };

}));

//implement letters to 'textarea' when clicking on virtual keyboard-rus
[...keysRu].forEach(item => item.addEventListener('click', function (event) {
   if (event.target.dataset.keyrus !== 'Shift' && event.target.dataset.keyrus !== 'Cmd'
      && event.target.dataset.keyrus !== 'Contr' && event.target.dataset.keyrus !== 'Opt'
      && event.target.dataset.keyrus !== 'Enter' && event.target.dataset.keyrus !== 'Del'
      && event.target.dataset.keyrus !== 'Backspace' && event.target.dataset.keyrus !== 'Tab'
      && event.target.dataset.keyrus !== 'Caps Lock' && event.currentTarget.dataset.keyrus !== 'up'
      && event.currentTarget.dataset.keyrus !== 'down' && event.currentTarget.dataset.keyrus !== 'left'
      && event.currentTarget.dataset.keyrus !== 'right' && event.target.dataset.keyrus !== 'Space') {
      text.value += event.target.dataset.keyrus;
   };

   for (let i = 0; i < keys.length; i++) {
      if (event.target.dataset.keyrus == 'Caps Lock' && keys[i].innerText.length === 1
         && keys[i].classList.contains('in-lower-case')) {
         keys[i].innerText = keys[i].innerText.toUpperCase();
         keys[i].setAttribute('data-keyrus', keys[i].innerText);
         keys[i].classList.add('in-upper-case');
         keys[i].classList.remove('in-lower-case');
      } else if (event.target.dataset.keyrus == 'Caps Lock' && keys[i].classList.contains('in-upper-case')) {
         keys[i].classList.remove('in-upper-case');
         keys[i].classList.add('in-lower-case');
         keys[i].innerText = keys[i].innerText.toLowerCase();
         keys[i].setAttribute('data-keyrus', keys[i].innerText);
      };
   };

   if (event.target.dataset.keyrus == 'Space') {
      text.value += ' ';
   };
   if (event.target.dataset.keyrus == 'Enter') {
      text.value += '\n';
   };
   if (event.target.dataset.keyrus == 'Clear') {
      text.value = ' ';
   };
   if (event.target.dataset.keyrus == 'Backspace') {
      text.value = text.value.slice(0, -1);
   };
   if (event.target.dataset.keyrus == 'Del') {
      text.value = text.value.slice(1, -1);
   };
   if (event.currentTarget.dataset.keyrus == 'left') {
      text.value += '◄';
   };
   if (event.currentTarget.dataset.keyrus == 'right') {
      text.value += '►';
   };
   if (event.currentTarget.dataset.keyrus == 'down') {
      text.value += '▼';
   };
   if (event.currentTarget.dataset.keyrus == 'up') {
      text.value += '▲';
   };

}));

// focus is only on 'textarea'!!! 
document.getElementById('textarea').focus();
document.addEventListener('mousedown', function (event) {
   if (event.currentTarget !== text) {
      event.preventDefault();
   };
});

//additional

//night mode
nightMode.addEventListener('click', function () {
   circle.classList.toggle('circle-active');
   body.classList.toggle('body-active');
   title.classList.toggle('title-night');
   description.classList.toggle('descr-night');
   language.classList.toggle('lang-night');
   nightMode.classList.toggle('night-mode-active');
   keyboard.classList.toggle('keyboard-night');
   keyboardRus.classList.toggle('keyboard-night');
   text.classList.toggle('text-night');
   [...icon].forEach(item => {
      item.classList.toggle('icon-night')
   });
   for (let i = 0; i < keys.length; i++) {
      keys[i].classList.toggle('keys-night');
   }
   for (let i = 0; i < keysRu.length; i++) {
      keysRu[i].classList.toggle('keys-night');
   }
});
//---------------------------------------------------
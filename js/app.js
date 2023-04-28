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


keyboard.classList.add('eng');

//create keyboard itself
let keySymbolsEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter", 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', '', 'Ctrl', 'Opt', 'Cmd', 'Space', 'left', 'down', 'right']; 



function createKeyButtonsEngl() {
  let engButton = '';
  for (let i = 0; i < keySymbolsEng.length; i++) {
    engButton += '<div class="keyboard-key" data-key="' + keySymbolsEng[i] + '" >' + keySymbolsEng[i] + '</div>';
  };
  keyboard.innerHTML = engButton;
};
createKeyButtonsEngl();

let keys = document.querySelectorAll('.keyboard-key');
let spaceKey = document.querySelector('.keyboard-key[data-key="Space"]');
let shiftRight = document.querySelector('.keyboard-key[data-key="Shift"]');
let shiftLeft = document.querySelector('.keyboard-key[data-key="Shift"]');
let capsLock = document.querySelector('.keyboard-key[data-key="Caps Lock"]');
let backSpace = document.querySelector('.keyboard-key[data-key="Backspace"]');
let tab = document.querySelector('.keyboard-key[data-key="Tab"]');
let del = document.querySelector('.keyboard-key[data-key="Del"]');
let enter = document.querySelector('.keyboard-key[data-key="Enter"]');
let control = document.querySelector('.keyboard-key[data-key="Ctrl"]');
let option = document.querySelector('.keyboard-key[data-key="Opt"]');
let command = document.querySelector('.keyboard-key[data-key="Cmd"]');
let left = document.querySelector('.keyboard-key[data-key="left"]');
let up = document.querySelector('.keyboard-key[data-key="up"]');
let down = document.querySelector('.keyboard-key[data-key="down"]');
let right = document.querySelector('.keyboard-key[data-key="right"]');

let keysRu = document.querySelectorAll('.keyboard-key-ru');
let spaceKeyRu = document.querySelector('.keyboard-key-ru[data-key="Space"]');
let shiftRightRu = document.querySelector('.keyboard-key-ru[data-key="Shift"]');
let shiftLeftRu = document.querySelector('.keyboard-key-ru[data-key="Shift"]');
let capsLockRu = document.querySelector('.keyboard-key-ru[data-key="Caps Lock"]');
let backSpaceRu = document.querySelector('.keyboard-key-ru[data-key="Backspace"]');
let tabRu = document.querySelector('.keyboard-key-ru[data-key="Tab"]');
let delRu = document.querySelector('.keyboard-key-ru[data-key="Del"]');
let enterRu = document.querySelector('.keyboard-key-ru[data-key="Enter"]');
let controlRu = document.querySelector('.keyboard-key-ru[data-key="Ctrl"]');
let optionRu = document.querySelector('.keyboard-key-ru[data-key="Opt"]');
let commandRu = document.querySelector('.keyboard-key-ru[data-key="Cmd"]');
let leftRu = document.querySelector('.keyboard-key-ru[data-key="left"]');
let upRu = document.querySelector('.keyboard-key-ru[data-key="up"]');
let downRu = document.querySelector('.keyboard-key-ru[data-key="down"]');
let rightRu = document.querySelector('.keyboard-key-ru[data-key="right"]');
//let nightMode = document.querySelector('.keyboard-key[data-key="night"]');
let body = document.querySelector('.body');

  up.innerHTML = '<img src ="../icons/117461.png" style="width: 20px">';
  down.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(180deg)">';
  left.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(-90deg)">';
  right.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(90deg)">';



//creating rus symbols

let keySymbolsRus = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'з', 'х', 'ё', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", "Enter", 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'up', '', 'Ctrl', 'Opt', 'Cmd', 'Space', 'left', 'down', 'right'];

function createKeyButtonsRus() {
  let rusButtons = '';
  for (let i = 0; i < keySymbolsRus.length; i++) {
    rusButtons += '<div class="keyboard-key-ru" data-key="' + keySymbolsRus[i] + '" >' + keySymbolsRus[i] + '</div>';
  };

  keyboard.innerHTML = rusButtons;
}
//createKeyButtonsRus(); 

//upRu.innerHTML = '<img src ="../icons/117461.png" style="width: 20px">';
//downRu.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(180deg)">';
//leftRu.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(-90deg)">';
//rightRu.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(90deg)">';

//identifying of key codes
document.querySelector('.textarea').addEventListener('keydown', e => {
  console.log(e)
});

//add hilights when 'keydown' 
window.addEventListener('keydown', function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('data-key')) {
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
    if (e.code == 'CapsLock' && keys[i].innerText.length === 1) {
      capsLock.classList.add('active');
      keys[i].innerText = keys[i].innerText.toUpperCase();
      keys[i].setAttribute('data-key', keys[i].innerText);
    }
    if (e.code == 'Backspace') {
      backSpace.classList.add('active');
    }
    if (e.code == 'Tab') {
      tab.classList.add('active');
    }
    if (e.code == 'Delete') {
      del.classList.add('active');
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
      shiftRight.classList.remove('active');
    }
    if (e.code == 'ShiftRight') {
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
    if (e.key == keysRu[i].getAttribute('data-key')) {
      keysRu[i].classList.add('active')
    }

    if (e.code == 'Space') {
      spaceKeyRu.classList.add('active')
    }
    if (e.code == 'ShiftLeft') {
      shiftLeftRu.classList.add('active')
    }
    if (e.code == 'ShiftRight') {
      shiftRightRu.classList.add('active')
    }
    if (e.code == 'CapsLock' && keysRu[i].innerText.length === 1) {
      capsLockRu.classList.add('active');
      keysRu[i].innerText = keysRu[i].innerText.toUpperCase();
      keysRu[i].setAttribute('data-key', keysRu[i].innerText);
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
      leftRu.classList.add('active');
    }
    if (e.code == 'ArrowUp') {
      upRu.classList.add('active');
    }
    if (e.code == 'ArrowDown') {
      downRu.classList.add('active');
    }
    if (e.code == 'ArrowRight') {
      rightRu.classList.add('active');
    }
  };
});

//remove hilights for rus language when 'keyup'
window.addEventListener('keyup', function (e) {
  for (let i = 0; i < keysRu.length; i++) {
    if (e.key == keysRu[i].getAttribute('data-key')) {
      keysRu[i].classList.remove('active');
    }
    if (e.code == 'Space') {
      spaceKeyRu.classList.remove('active');
    }
    if (e.code == 'ShiftLeft') {
      shiftRightRu.classList.remove('active');
    }
    if (e.code == 'ShiftRight') {
      shiftLeftRu.classList.remove('active');
    }
    if (e.code == 'CapsLock' && keysRu[i].innerText.length === 1) {
      capsLockRu.classList.remove('active');
      keysRu[i].innerText = keysRu[i].innerText.toLowerCase();
      keysRu[i].setAttribute('data-key', keysRu[i].innerText);
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
      leftRu.classList.remove('active');
    }
    if (e.code == 'ArrowUp') {
      upRu.classList.remove('active');
    }
    if (e.code == 'ArrowDown') {
      downRu.classList.remove('active');
    }
    if (e.code == 'ArrowRight') {
      rightRu.classList.remove('active');
    }
  };
});

//function for languages to change
function runOnKeys(...args) {

  let arrChars = [];                    // array of at the same time pressed keys

  document.addEventListener("keydown", function (event) {
    if (event.repeat) return;         // repetitions are not processed
    arrChars.push(event.code);        // remember the code of the pressed and not yet released key
  });

  document.addEventListener("keyup", function (event) {
    if (arrChars.length == 0) return;    // nothing to process, end the function

    let runFunc = true;
    for (let arg of args) {              // whether monitored keys are pressed at the same time
      if (!arrChars.includes(arg)) {
        runFunc = false;
        break;
      }
    }
    if (runFunc && keyboard.classList.contains('eng')) {
      keyboard.classList.remove('eng');
      keyboard.classList.add('rus')
      createKeyButtonsRus();
    } else if (runFunc && keyboard.classList.contains('rus')) {    // if pressed, run the given code
      keyboard.classList.remove('rus');
      keyboard.classList.add('eng')
      createKeyButtonsEngl();
    }

    arrChars.length = 0;              // clear the array of at the same time pressed keys
  });

}
runOnKeys('ControlLeft', 'Space');
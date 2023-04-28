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
let keySymbolsEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "Enter", 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', '', 'Ctrl', 'Opt', 'Cmd', 'Space', 'left', 'down', 'right'];
let keySymbolsRus = [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'з', 'х', 'ё', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", "Enter", 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'up', '', 'Ctrl', 'Opt', 'Cmd', 'Space', 'left', 'down', 'right'];

function createKeyButtonsEngl() {
  let engButton = '';
  let rusButton = '';

  for (let i = 0; i < keySymbolsEng.length; i++) {
    engButton += '<div class="keyboard-key" data-key="' + keySymbolsEng[i] + '" >' + keySymbolsEng[i] + '</div>';
    rusButton += '<div class="keyboard-key" data-key="' + keySymbolsRus[i] + '" >' + keySymbolsRus[i] + '</div>';
  };

  keyboard.classList.add('rus');
  keyboard.classList.add('eng');

  if (keyboard.classList.contains('eng')) {
    keyboard.innerHTML = engButton;
  } else if (keyboard.classList.contains('rus')) {
    keyboard.innerHTML = rusButton;
  };

};
createKeyButtonsEngl();



//function createKeyButtonsRus() {
//    let rusButtons = '';
//    for (let i = 0; i < keySymbolsRus.length; i++) {
//      rusButtons += '<div class="keyboard-key" data-key="' + keySymbolsRus[i] + '" >' + keySymbolsRus[i] + '</div>';
//    };
//    keyboard.innerHTML = rusButtons;
//}



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
//let nightMode = document.querySelector('.keyboard-key[data-key="night"]');
let body = document.querySelector('.body');

up.innerHTML = '<img src ="../icons/117461.png" style="width: 20px">';
down.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(180deg)">';
left.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(-90deg)">';
right.innerHTML = '<img src ="../icons/117461.png" style="width: 20px; transform: rotate(90deg)">';



document.querySelector('.textarea').addEventListener('keydown', e => {
  console.log(e)
});



//add styles when are active 
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

//переключения языка
//function createKeyButtonsRus() {
//  let rusButtons = '';
//  for (let i = 0; i < keySymbolsRus.length; i++) {
//    rusButtons += '<div class="keyboard-key" data-key="' + keySymbolsRus[i] + '" >' + keySymbolsRus[i] + '</div>';
//  };
//  keyboard.innerHTML = rusButtons;
//}

//функция отслеживания нажатия кнопок
//function runOnKeys(func, ...codes) {
//  let pressed = new Set();

//document.addEventListener('keydown', function(event) {
//  pressed.add(event.code);

//  for (let code of codes) { // все ли клавиши из набора нажаты?
//    if (!pressed.has(code)) {
//      return;
//    }
//  }
//  pressed.clear();
//  func();
//});

//document.addEventListener('keyup', function(event) {
//  pressed.delete(event.code);
//});

//}

//runOnKeys(
//() => createKeyButtonsRus(),
//"ControlLeft",
//"Space"
//);


//window.addEventListener('keydown', function (e) {
//  for (let i = 0; i < keys.length; i++) {
//    if (keyboard.classList.contains('rus') && e.code == 'ControlLeft' && e.code == 'Space') {
//    }
//  }
//})
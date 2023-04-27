//create elements to hTML
let conteiner = document.createElement('div');
document.body.append(conteiner);
conteiner.className = 'conteiner';

let title = document.createElement('p');
conteiner.append(title);
title.className = 'title';

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
let keyPress = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 187, 8, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 13, 20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 16, 96, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 16, 17, 18, 91, 32, 93, 18, 37, 38, 40, 39]

// document.onkeypress = function(event) {
//  //console.log(event);
//  keyPress.push(event.charCode);
//  console.log(keyPress);
// };
function init() {
   let out = '';
   for (let i = 0; i < keyPress.length; i++) {
      out += '<div class="keyboard-key" data="' + keyPress[i] + '" >' + String.fromCharCode(keyPress[i]) + '</div>';
   };

   document.querySelector('.keyboard').innerHTML = out;
}
init();

document.onkeypress = function (event) {
   console.log(event.code);
   console.log(event.keyCode);
  
   document.querySelectorAll('.keyboard .keyboard-key').forEach(function (element) {
      element.classList.remove('active');
   });
   document.querySelector('.keyboard .keyboard-key[data="' + event.keyCode + '"]').classList.add('active');
};

document.querySelectorAll('.keyboard .keyboard-key').forEach(function (element) {
   element.onclick = function (event) {
      document.querySelectorAll('.keyboard .keyboard-key').forEach(function (element) {
         element.classList.remove('active');
      });
      let code = this.getAttribute('data');
      this.classList.add('active');
      console.log(code);
   }
});

const smthText = document.querySelector('#smthText');

smthText.addEventListener('click', function() {

let newText = prompt('Введите любое слово или фразу и увидите, как меняется текст ссылки');
this.textContent = newText;


});




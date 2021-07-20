const smhText = document.getElementById('smthText');

smhText.addEventListener('click', function (event) {
    newText = prompt('Введите любое слово или фразу и увидите, как меняется текст ссылки');
    smhText.textContent = newText;
    event.preventDefault();
});

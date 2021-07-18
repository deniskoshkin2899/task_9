const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {

alert('Служит для вывода информации в консоль');

});


const alertExample =  document.querySelector('#alertExample');


alertExample.addEventListener('click', () => {

    alert('служит для вывода информации на экране браузера');


}); 




const promptExample = document.querySelector('#promptExample');

promptExample.addEventListener('click', () => {

    prompt('служит для получения данных от пользователя');

});
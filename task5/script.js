document.getElementById("sbmt").onclick = function (e) {

    document.getElementById("txt").value = "";

}




const input = document.querySelector('input');

input.addEventListener('keydown', function (e) {

    let p = document.querySelector('.result')
    p.textContent = e.target.value
    console.log(e.target.value)

})
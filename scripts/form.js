function sendForm(){
    var fullname = document.getElementById('fullname').value;
    var pecho = document.getElementById('pecho').checked.value;
    var crol = document.getElementById('crol').checked.value;
    var espalda = document.getElementById('espalda').checked.value;
    var mariposa = document.getElementById('mariposa').checked.value;

    console.log(fullname, pecho, crol, espalda, mariposa);
}
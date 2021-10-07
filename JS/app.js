const Username = document.querySelector('#Username');
const Age = document.querySelector('#Age');
const Btn_Calculate = document.querySelector('#Btn_Calculate') 
const Message = document.querySelector('#Message')


Btn_Calculate.addEventListener('click', Accept);

function Accept(){
    const Agec = parseInt(Age.value);
    if (Agec>=18) {
        Message.textContent = `${Username.value} es mayor de edad y puede votar`
    }else {
        Message.textContent = `${Username.value} es menor de edad y no puede votar`
    }
}





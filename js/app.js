const eye = document.getElementById('eye');
const input = document.getElementById('pass');

document.getElementById('eye').addEventListener('click',function(){
    if(input.type === 'password'){
        input.type = 'text';
        eye.classList.replace('fa-eye-slash','fa-eye');
    }
    else{
        input.type = 'password';
        eye.classList.replace('fa-eye','fa-eye-slash');
    }
})
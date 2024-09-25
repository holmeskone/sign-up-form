const password = document.getElementById('user_pass')
const confirmedPassword = document.getElementById('user_pass_confirmation')
const errorMessage = document.getElementById('error')

function validatePassword (){
    if(password.value !== confirmedPassword.value && confirmedPassword !== ''){
            password.classList.add('error');
            confirmedPassword.classList.add('error');
            errorMessage.style.display = 'block';
    } else {
        password.classList.remove('error');
        confirmedPassword.classList.remove('error');
        errorMessage.style.display = 'none';
          }
    }

// Add event listeners to validate as the user types
password.addEventListener('input', validatePassword);
confirmedPassword.addEventListener('input', validatePassword);
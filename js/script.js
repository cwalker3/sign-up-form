const form = document.getElementById('sign-up');
const password1 = document.getElementById('password-1');
const password2 = document.getElementById('password-2');
const error = document.getElementsByClassName('error')[0]
const requirements = document.getElementsByClassName('requirements')[0]

password1.addEventListener('focusout', verifyPasswordRequirements);
password2.addEventListener('focusout', verifyPasswordMatch);

form.addEventListener('submit', (e) => {
  if(!verifyPasswordMatch()) {
    e.preventDefault();
  }
})

function verifyPasswordRequirements() {
  if (password1.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)) {
    requirements.classList.remove('error')
    return true;
  }
  else {
    requirements.classList.add('error')
    return false;
  }
}

function verifyPasswordMatch() {
  if (password1.value !== password2.value) {
    error.innerText = 'Passwords do not match.';
    return false;
  }
  else {
    error.innerText = '';
    return true;
  }
}


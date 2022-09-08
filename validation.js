const submitBtn = document.querySelector('.contact-button');
const error = document.getElementById('error');
const validateEmail = (email) => email === email.toLowerCase();

submitBtn.addEventListener('click', () => {
  const emailVal = document.querySelector('.email').value;
  if (!validateEmail(emailVal)) {
    error.textContent = 'Please enter a valid email address using lower case letters and numbers eg. shuhad@gmail.com';
    error.style.color = 'red';
  } else {
    error.style.display = 'none';
  }
});

const dEmail = document.getElementById('user-email1');
const dForm = document.getElementById('form1');
const message = document.querySelector('.redColor');

dForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = dEmail.value;
  const emailLowerCase = emailInput.toLowerCase();

  if (emailInput === emailLowerCase) {
    dForm.submit();
  } else {
    message.classList.remove('displayNone');
  }
});

dEmail.addEventListener('focus', () => {
  message.classList.add('displayNone');
});

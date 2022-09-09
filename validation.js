const dEmail = document.getElementById('user-email1');
const dForm = document.getElementById('form1');
const Email = document.getElementById('user-email2');
const Form = document.getElementById('form2');
const message = document.querySelector('.redColor');
const message2 = document.querySelector('.redColor2');

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

Email.addEventListener('focus', () => {
  message2.classList.add('displayNone2');
});

Form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = Email.value;
  const emailLowerCase = emailInput.toLowerCase();

  if (emailInput === emailLowerCase) {
    Form.submit();
  } else {
    message2.classList.remove('displayNone2');
  }
});

Email.addEventListener('focus', () => {
  message.classList.add('displayNone');
});

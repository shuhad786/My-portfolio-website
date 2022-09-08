const form = document.querySelector('.form-info');

const {
  fname, lname, name, email, messagebox,
} = form.elements;

if (!localStorage.getItem('formObj')) {
  const formData = {
    fnameData: '', lnameData: '', nameData: '', emailData: '', messageData: '',
  };

  localStorage.setItem('formObj', JSON.stringify(formData));
}

const reservedata = (element, val) => {
  element.addEventListener('change', () => {
    const data = element.value;
    const formData = JSON.parse(localStorage.getItem('formObj'));
    formData[val] = data;
    localStorage.setItem('formObj', JSON.stringify(formData));
  });
};

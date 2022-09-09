const form = document.querySelector('.form');
const form2 = document.querySelector('.desktop-form');

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

reservedata(fname, 'fnameData');
reservedata(lname, 'lnameData');
reservedata(name, 'nameData');
reservedata(email, 'emailData');
reservedata(messagebox, 'messageData');

const formData = JSON.parse(localStorage.getItem('formObj'));
fname.value = formData.fnameData;
lname.value = formData.lnameData;
email.value = formData.emailData;
name.value = formData.nameData;
messagebox.textContent = formData.messageData;

const form = document.querySelector('.form');
const form2 = document.querySelector('.desktop-form');

const {
  fname, lname, wholeName, Email, Message,
} = form.elements;

if (!localStorage.getItem('formObj')) {
  const formData = {
    fnameData: '', lnameData: '', wholeNameData: '', EmailData: '', MessageData: '',
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
reservedata(wholeName, 'wholeNameData');
reservedata(Email, 'EmailData');
reservedata(Message, 'MessageData');

const formData = JSON.parse(localStorage.getItem('formObj'));
fname.value = formData.fnameData;
lname.value = formData.lnameData;
Email.value = formData.EmailData;
wholeName.value = formData.wholeNameData;
Message.textContent = formData.MessageData;

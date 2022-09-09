const form = document.querySelector('.form');

const {
  wholeName, Email, Message,
} = form.elements;

if (!localStorage.getItem('formObj')) {
  const formData = {
    wholeNameData: '', EmailData: '', MessageData: '',
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

reservedata(wholeName, 'wholeNameData');
reservedata(Email, 'EmailData');
reservedata(Message, 'MessageData');

const formData = JSON.parse(localStorage.getItem('formObj'));

Email.value = formData.EmailData;
wholeName.value = formData.wholeNameData;
Message.textContent = formData.MessageData;

const form2 = document.querySelector('.desktop-form');

const {
  fname, lname, Email, Message,
} = form.elements;

if (!localStorage.getItem('formObj')) {
  const formData = {
    fnameData: '', lnameData: '', EmailData: '', MessageData: '',
  };

  localStorage.setItem('formObj', JSON.stringify(formData));
}

const reservedata2 = (element, val) => {
  element.addEventListener('change', () => {
    const data = element.value;
    const formData2 = JSON.parse(localStorage.getItem('formObj'));
    formData2[val] = data;
    localStorage.setItem('formObj', JSON.stringify(formData2));
  });
};

reservedata2(fname, 'fnameData');
reservedata2(lname, 'lnameData');
reservedata2(Email, 'EmailData');
reservedata2(Message, 'MessageData');

const formData2 = JSON.parse(localStorage.getItem('formObj'));
fname.value = formData2.fnameData;
lname.value = formData2.lnameData;
Email.value = formData2.EmailData;
wholeName.value = formData2.wholeNameData;
Message.textContent = formData2.MessageData;

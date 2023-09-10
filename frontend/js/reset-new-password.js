import { URL } from '../config.js';

//////////////////////////////////////
// Variables
const resetnewPassForm = document.querySelector('.new-password-form');
const errorMsgContainer = document.querySelector('.error-msg-container');
const toFormBtn = document.querySelector('.to-form-btn');
const toFormLink = document.querySelector('.to-form-link');
//////////////////////////////////////
// Functions
toFormBtn.onclick = () => {
  toFormLink.click();
};

resetnewPassForm.onsubmit = async e => {
  try {
    e.preventDefault();
    const newPassInput = document.querySelector('.new-password');
    const confirmNewPassInput = document.querySelector('.confirm-new-password');
    const email = JSON.parse(localStorage.getItem('todo-app-reset-email'));
    const verifCode = JSON.parse(
      localStorage.getItem('todo-app-reset-verifcode')
    );
    if (!email || !verifCode) {
      return toFormLink.click();
    }
    let res = await fetch(`${URL}/newPassword`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        verifCode: verifCode,
        newPassword: newPassInput.value,
        confirmNewPassword: confirmNewPassInput.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await res.json();
    console.log(data);
    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }
    localStorage.removeItem('todo-app-reset-email');
    localStorage.removeItem('todo-app-reset-verifcode');
    toFormLink.click();
  } catch (err) {
    errorMsgContainer.innerText = '';
    errorMsgContainer.insertAdjacentText('afterbegin', err.message);
  }
};

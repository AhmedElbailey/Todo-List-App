///////////////////////////////////
// Configurations
const URL = 'http://localhost:7000';

//////////////////////////////////////
// Variables
const resetVerifCodeForm = document.querySelector('.verify-code-form');
const errorMsgContainer = document.querySelector('.error-msg-container');
const toNewPasswordLink = document.querySelector('.to-newPassword-link');
const toFormBtn = document.querySelector('.to-form-btn');
const toFormLink = document.querySelector('.to-form-link');
//////////////////////////////////////
// Functions
toFormBtn.onclick = () => {
  toFormLink.click();
};

resetVerifCodeForm.addEventListener('submit', async e => {
  try {
    e.preventDefault();
    const verifCodeInput = document.querySelector('.verification-code');
    const email = JSON.parse(localStorage.getItem('todo-app-reset-email'));
    if (!email) {
      return toFormLink.click();
    }
    let res = await fetch(`${URL}/verifcode`, {
      method: 'POST',
      body: JSON.stringify({
        verifCode: verifCodeInput.value,
        email: email,
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
    localStorage.setItem(
      'todo-app-reset-verifcode',
      JSON.stringify(verifCodeInput.value)
    );
    toNewPasswordLink.click();
  } catch (err) {
    errorMsgContainer.innerText = '';
    errorMsgContainer.insertAdjacentText('afterbegin', err.message);
  }
});

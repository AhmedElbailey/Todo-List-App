///////////////////////////////////
// Configurations
const URL = 'http://localhost:7000';

//////////////////////////////////////
// Variables
const resetEmailForm = document.querySelector('.reset-email-form');
const errorMsgContainer = document.querySelector('.error-msg-container');
const toFormBtn = document.querySelector('.to-form-btn');
const toFormLink = document.querySelector('.to-form-link');
const toVerifCodeLink = document.querySelector('.to-verifcode-link');

//////////////////////////////////////
// Functions
resetEmailForm.addEventListener('submit', async e => {
  try {
    e.preventDefault();
    const emailInput = document.querySelector('.email');
    let res = await fetch(`${URL}/email`, {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await res.json();
    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }
    localStorage.setItem(
      'todo-app-reset-email',
      JSON.stringify(emailInput.value)
    );
    toVerifCodeLink.click();
  } catch (err) {
    errorMsgContainer.innerText = '';
    errorMsgContainer.insertAdjacentText('afterbegin', err.message);
  }
});

toFormBtn.onclick = () => {
  toFormLink.click();
};

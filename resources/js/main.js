import { messages } from './fortunes.js'

const cookie = document.querySelector('.cookie');
const message = document.querySelector('.message');

function randomMessage() {
  let rand = Math.floor(Math.random() * messages.length);
  cookie.setAttribute('id', 'shake-lr');
  message.innerHTML = messages[rand];
  setTimeout(() => {
    cookie.setAttribute('id', 'shake');
  },500)
};

cookie.addEventListener('click', randomMessage)
import { messages } from './fortunes.js'

const cookie = document.querySelector('.cookie');
const message = document.querySelector('.message');

function randomMessage() {
  let rand = Math.floor(Math.random() * messages.length);
  message.innerHTML = messages[rand];
};

cookie.addEventListener('click', randomMessage)
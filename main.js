import { formatDate } from 'sesajs-date'

const now = formatDate()
console.log('formatDate ok : ', now)
const elt = document.querySelector('#app')
elt.innerHTML = `build ok, time is ${now}`

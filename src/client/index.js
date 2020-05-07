import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
const neutral = require('../client/views/img/img-neutral.jpg');

import { checkForUrl } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { addImg } from './js/addImg.js'

console.log("CHANGE!!");
console.log("CHANGE!!");
document.getElementById('sentiment').src = '../client/views/img/img-neutral.jpg';


export {
    checkForUrl,
    handleSubmit,
    addImg
}



import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import logo from '../client/images/sentiment-img.jpg'
const logoIcon = document.getElementById('logo');
logoIcon.src = logo;

import { checkForUrl } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

export {
    checkForUrl,
    handleSubmit,
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
}



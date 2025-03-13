// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// form hendler
const handleForm = event => {
  event.preventDefault();

  const formData = {
    delay: event.target.elements.delay.value,
    state: event.target.elements.state.value,
  };

  console.log('form-data', formData);

  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (formData.state == 'fulfilled') {
        resolve(formData.delay);
      } else {
        rejected(formData.delay);
      }
    }, formData.delay);
  })
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${formData.delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${formData.delay}ms`,
        position: 'topRight',
      });
    });

  event.target.reset();
};

document.querySelector('.form').addEventListener('submit', handleForm);

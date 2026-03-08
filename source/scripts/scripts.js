// burger
const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.site-nav');

if (header) {
  header.classList.remove('header--nojs');

  burgerBtn.addEventListener('click', () => {
    header.classList.toggle('header--open');
  });

  menu.addEventListener('click', (ev) => {
    let target = ev.target;
    if (target.classList.contains('site-nav__link')) {
      header.classList.toggle('header--open');
    }
  });
}




// feedback
const moreFeedbackButton = document.querySelector('.feedback__button');
const feedbacks = document.querySelectorAll('.feedback__list li');
let feedbackShowFlag = false;

moreFeedbackButton.classList.remove('feedback__button--nojs');

if (feedbacks) {
  feedbacks.forEach((item, index) => {
    if (index >= 4) {
      item.classList.add('hidden');
    }
  });
}

if (moreFeedbackButton && feedbacks) {
  moreFeedbackButton.addEventListener('click', () => {
    for (let i = 4; i < feedbacks.length; i++) {
      feedbacks[i].classList.toggle('hidden');
    }
    feedbackShowFlag = !feedbackShowFlag;
    if (feedbackShowFlag) moreFeedbackButton.textContent = 'Свернуть отзывы';
    else moreFeedbackButton.textContent = 'Почитать все';
  });
}


// form
const agreementCheckbox = document.getElementById('agreement');
const orderSubmitButton = document.querySelector('.order-form__button');

if (orderSubmitButton) orderSubmitButton.disabled = true;

if (agreementCheckbox && orderSubmitButton) {
  agreementCheckbox.addEventListener('change', () => {
    if (agreementCheckbox.checked) {
      orderSubmitButton.disabled = false;
    } else {
      orderSubmitButton.disabled = true
    }
  });
}

// smooth scrolling
const smoothScroll = () => {
  const scrollLinks = document.querySelectorAll('.site-nav a[href^="#"]:not(.site-nav a[href="#"])');
  scrollLinks.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      let id = anchor.getAttribute('href');
      id = id.substring(1);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    })
  });
}

smoothScroll();


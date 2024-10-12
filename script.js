const toggleButton = document.querySelector('.dropdown-toggle');
const navigation = document.querySelector('header .nav');
const bodyScroll = document.querySelector('body');

toggleButton.addEventListener('click', () => {
    navigation.classList.toggle('active');

    bodyScroll.classList.toggle('noscroll')
});


// document.querySelector('.height').innerHTML = window.innerWidth

const faqQuestion = document.querySelectorAll('.faq-question');

faqQuestion.forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});

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

// NEWSLETTER

const newsForm = document.getElementById('newsletter-form');


newsForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email').value;
    const formMessage = document.getElementById('form-message');

    // Simple email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Simulating successful subscription
    if (emailPattern.test(emailInput)) {

        formMessage.textContent = "Thank you for subscribing!";
        formMessage.classList.remove('error');
        document.getElementById('newsletter-form').reset();
        // Clear the input field

    } else {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.classList.add('error');
    }
});

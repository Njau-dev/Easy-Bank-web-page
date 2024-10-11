const toggleButton = document.querySelector('.dropdown-toggle');
const navigation = document.querySelector('header .nav');
const bodyScroll = document.querySelector('body');

toggleButton.addEventListener('click', () => {
    navigation.classList.toggle('active');

    bodyScroll.classList.toggle('noscroll')
});


document.querySelector('.height').innerHTML = window.innerWidth


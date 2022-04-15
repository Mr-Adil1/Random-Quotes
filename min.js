"use strict";
const quotetext = document.querySelector('.quote');
const quot_area = document.querySelector('.quot-area');
const quotBtn = document.querySelector('button');
const authername = document.querySelector('.name');
const soundbtn = document.querySelector('.sound');
const copy = document.querySelector('.copy');
const toggle = document.querySelector('.toggle');
const share = document.querySelector('.share');
const copied = document.querySelector('.copied');
const insta = document.querySelector('.bxl-instagram');
const twitt = document.querySelector('.bxl-twitter');
const whatsapp = document.querySelector('.bxl-whatsapp');
const facebook = document.querySelector('.bxl-facebook');

// random_Quote_function
quotBtn.addEventListener('click', () => {
    quotBtn.classList.add('loading');
    quotBtn.innerHTML = 'Loading...'
    quotetext.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Loading Data..'
    fetch("https://api.quotable.io/random").then((response) => {
        response.json().then((data) => {
            quotetext.innerHTML = data.content;
            authername.innerHTML = data.author;
            quotBtn.innerHTML = 'New Quote'
            quotBtn.classList.remove('loading');
        }).catch((error) => {
            quotetext.innerHTML = '404 note found';
        });
    });
});

soundbtn.addEventListener('click', () => {
    let uttrence = new SpeechSynthesisUtterance(`${quotetext.innerHTML} by ${authername.innerHTML}`);
    speechSynthesis.speak(uttrence);
})

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(`${quotetext.innerHTML}`);
    copied.classList.add('show');
    setTimeout(() => {
        copied.classList.remove('show');
    }, 1000);
});
// links-toggle
toggle.addEventListener('click', () => {
    share.classList.toggle('active');
});
// instagram
insta.addEventListener('click', () => {
    open('https://www.instagram.com/');
});
// twitter
twitt.addEventListener('click', () => {
    open('https://www.twitter.com/');
});
// whatsapp
whatsapp.addEventListener('click', () => {
    open('https://web.whatsapp.com/');
});
// facebook
facebook.addEventListener('click', () => {
    open('https://www.facebook.com/');
});
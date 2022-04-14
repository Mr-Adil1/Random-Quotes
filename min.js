"use strict";
const quotetext = document.querySelector('.quote');
const quot_area = document.querySelector('.quot-area');
const quotBtn = document.querySelector('button');
const authername = document.querySelector('.name');
const soundbtn = document.querySelector('.sound');
const copy = document.querySelector('.copy');
const twittwr = document.querySelector('.twitter');
const copied = document.querySelector('.copied')

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

twittwr.addEventListener('click', () => {
    let twitUrl = `https://twitter.com/intent/tweet?url=${quotetext.innerHTML}`
    window.open(twitUrl, '_blank');
});
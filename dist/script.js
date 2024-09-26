
// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// Hamburger Btn

const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Richard Yohanes", "Student at Binus University"];
const el = document.getElementById('typewriter');

let sleepTime = 100;
let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        // Ketik kata satu per satu
        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10); // Tunggu setelah mengetik kata

        // Hapus kata satu per satu
        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5); // Tunggu sebelum mengetik kata berikutnya

        // Ganti ke kata berikutnya
        curPhraseIndex++;
        if (curPhraseIndex >= phrases.length) {
            curPhraseIndex = 0; // Reset indeks ke awal
        }
    }
};

writeLoop();



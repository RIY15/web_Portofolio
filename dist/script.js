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

// animation typewriter
function sleep(ms) {
    return new  Promise((resolve) => setTimeout(resolve, ms))
}

const phrases = ["Richard Yohanes", "Undergraduate Student at Binus University"]
const el = document.getElementById('typewriter');

let sleepTime = 100;

let curPharseIndex = 0;

const writeLoop = async () => {
    while(true) {
        let curWord = phrases[curPharseIndex]

        for(let i=0; i<phrases.length; i++){
            el.innerText = curWord.substring(0, i+1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for(let i = curWord.length; i > 0; i--){
            el.innerText = curWord.substring(0, i-1);
            await sleep(sleepTime);
        }
        
        await sleep(sleepTime * 5);

        if(curPharseIndex === phrases.length){
            curPharseIndex = 0;
        }else {
            curPharseIndex++;
        }
    }
}

writeLoop();

// document.addEventListener('DOMContentLoaded', function () {
//     const words = ['Developer', 'Designer', 'Creator']; // Daftar kata-kata
//     let i = 0;

//     function typeWriter(word, index, callback) {
//       if (index < word.length) {
//         document.getElementById('typewriter').innerHTML = word.substring(0, index + 1);
//         setTimeout(function () {
//           typeWriter(word, index + 1, callback);
//         }, 200); // Kecepatan mengetik
//       } else {
//         setTimeout(callback, 1000); // Tunggu sebelum mengganti kata
//       }
//     }

//     function startTypewriter() {
//       if (i < words.length) {
//         typeWriter(words[i], 0, function () {
//           i++;
//           if (i >= words.length) {
//             i = 0;
//           }
//           setTimeout(startTypewriter, 500); // Waktu jeda sebelum kata berikutnya
//         });
//       }
//     }

//     startTypewriter();
//     }
// )
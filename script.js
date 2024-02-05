const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
    'Amatic SC',
    'Bangers',
    'Fredericka the Great'
]

/* const fonts = [
    'Optima',
    'Georgia',
    'Comic Sans',
    'Impact',
    'Garamond',
    'Bookman'
] */

const words = document.querySelectorAll('.word');

let count=0;

const changeFonts = () => {
    words.forEach(word => {
        let randomFontIndex = Math.floor(Math.random() * fonts.length);
        let randomFont = fonts[randomFontIndex];
        word.style.fontFamily = randomFont;
    })
}

function rollIntro(){
    changeFonts();
    setTimeout(rollIntro, 1000);
}; rollIntro();

var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie_anims/loading.json' // Path to your Lottie animation JSON file
});



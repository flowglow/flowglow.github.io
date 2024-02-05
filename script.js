const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
    'Amatic SC',
    'Bangers',
    'Fredericka the Great',
    'Bungee Inline'
]

/* const fonts = [
    'Optima',
    'Georgia',
    'Comic Sans',
    'Impact',
    'Garamond',
    'Bookman'
] */

const runwords = true
const words = document.querySelectorAll('.word');
const letters = document.querySelectorAll('.letter');

const changeFonts = (obj_list) => {
    obj_list.forEach(obj => {
        let randomFontIndex = Math.floor(Math.random() * fonts.length);
        let randomFont = fonts[randomFontIndex];
        obj.style.fontFamily = randomFont;
    })
}

function rollLetter(){
    changeFonts(letters);
    setTimeout(rollLetter, 1000);
};

/* function rollIntro(){
    changeWordFonts();
    setTimeout(rollIntro, 1000);
}; rollIntro(); */

/* let introAnimation = setInterval(function() {
    changeFonts(words);
    if(count>30)
        clearInterval(introAnimation);
    count++;
}, 300) */

let interval = setInterval(function(){
    changeFonts(words);
}, 1000);

setTimeout(() => clearInterval(interval), 5000)

var the_word = document.getElementById('the-word');
setTimeout(function(){
    $(`#loading-word`).fadeOut(1000);
    $(`#lottie-animation`).fadeOut(1000);
    the_word.style.fontFamily = 'Amatic SC'
    // $(`#the-word`).fadeOut(1000);
    rollLetter();
}, 7000);

setTimeout(function(){
    $(`#instagram-video`).fadeIn(2000);
}, 8500)


var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie_anims/loading.json' // Path to your Lottie animation JSON file
});



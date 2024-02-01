// JavaScript code for loading and playing Lottie animation
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie_anims/loading.json' // Path to your Lottie animation JSON file
});

// Additional JavaScript code for your website can be added here
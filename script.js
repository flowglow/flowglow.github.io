// Define variables for animation speed
const increaseSpeed = 0.05; // Adjust as needed
const fadeSpeed = 0.05; // Adjust as needed

// Function to handle scrolling and animations
function handleScroll() {
    console.log("Scrolling...");
    const lottieAnimation = document.getElementById('lottie-animation');
    const instagramEmbed = document.getElementById('instagram-embed');
    const lottieOffset = lottieAnimation.offsetTop - window.innerHeight;
    const instagramOffset = instagramEmbed.offsetTop - window.innerHeight;

    if (window.scrollY > lottieOffset) {
        lottieAnimation.style.transform = `scale(${1 + increaseSpeed})`;
        lottieAnimation.style.opacity = `${1 - fadeSpeed}`;
    }

    if (window.scrollY > instagramOffset) {
        instagramEmbed.style.opacity = `${1}`;
    }
}

// Load the animation
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie_anims/loading.json' // Path to your Lottie animation JSON file
});

// Add scroll event listener to handle animations
window.addEventListener('scroll', handleScroll);

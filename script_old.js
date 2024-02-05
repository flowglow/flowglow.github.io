document.addEventListener("DOMContentLoaded", function () {
    // Load the Lottie animation
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie_anims/loading.json'
    });

    // Function to handle scroll events
    function handleScroll() {
        // Get the Lottie animation element
        let lottieAnimation = document.getElementById("lottie-animation");
        // Get the Instagram video element
        let instagramVideo = document.getElementById("instagram-video");
        // Get the current scroll position
        let scrollPosition = window.scrollY;

        let opacity = 1 - (scrollPosition / window.innerHeight); // Adjust this formula as needed

        // Apply the opacity to the Lottie animation
        lottieAnimation.style.opacity = opacity;
        instagramVideo.style.opacity = 1 - opacity;

    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    // Load the Lottie animation
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie_anims/loading.json'
    });

    // Define the scroll threshold
    const scrollThreshold = 100;

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

        // Adjust opacity and visibility based on scroll position
        if (scrollPosition > (window.innerHeight / 2)) {
            instagramVideo.classList.remove("hidden");
        } else {
            instagramVideo.classList.add("hidden");
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
});

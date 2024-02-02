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
        let scrollPosition = window.scrollY || window.pageYOffset;

        // Adjust opacity and visibility based on scroll position
        if (scrollPosition > scrollThreshold) {
            lottieAnimation.style.opacity = "0";
            instagramVideo.classList.remove("hidden");
        } else {
            lottieAnimation.style.opacity = "1";
            instagramVideo.classList.add("hidden");
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
});

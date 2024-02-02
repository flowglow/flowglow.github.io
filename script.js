document.addEventListener('DOMContentLoaded', function () {
    const lottieAnimation = document.getElementById('lottie-animation');
    let animation = null;

    function handleScroll() {
        const windowHeight = window.innerHeight;
        const lottieTop = lottieAnimation.offsetTop;
        const lottieHeight = lottieAnimation.offsetHeight;
        const scrollPosition = window.scrollY;

        const isInViewport = (lottieTop < scrollPosition + windowHeight) && (lottieTop + lottieHeight > scrollPosition);
        const visibility = (windowHeight - (scrollPosition - lottieTop)) / windowHeight;

        if (isInViewport) {
            if (!animation) {
                animation = lottie.loadAnimation({
                    container: lottieAnimation,
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: 'lottie.json'
                });
            }
            animation.setSpeed(visibility); // Adjust animation speed based on visibility
            lottieAnimation.style.opacity = visibility; // Fade in/out based on visibility
        } else {
            if (animation) {
                animation.stop();
                animation = null;
            }
            lottieAnimation.style.opacity = 0; // Hide animation when not in viewport
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Prevent scrolling of body when the lottie animation is in viewport
    bodyScrollLock.disableBodyScroll(lottieAnimation);

    // Re-enable scrolling when animation is out of viewport
    window.addEventListener('resize', function () {
        if (!animation) {
            bodyScrollLock.enableBodyScroll(lottieAnimation);
        }
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> dd69d4b14610048abfa1469d84cc5c7e42e2401e

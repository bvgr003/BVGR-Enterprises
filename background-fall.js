document.addEventListener("scroll", function() {
    const fadeElement = document.body;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const fadeHeight = docHeight - winHeight;
    const fadeProgress = Math.min(scrollTop / fadeHeight, 1);

    fadeElement.style.background = `
        linear-gradient(
            rgba(255, 140, 0, 1) ${fadeProgress * 25}%,    /* Dark Orange (Pumpkin) */
            rgba(205, 92, 92, 1) ${fadeProgress * 25 + 25}%, /* Indian Red (Falling Leaves) */
            rgba(255, 215, 0, 1) ${fadeProgress * 25 + 50}%, /* Gold (Golden Leaves) */
            rgba(139, 69, 19, 1) ${fadeProgress * 25 + 75}%  /* Saddle Brown (Tree Trunks) */
        )
    `;
});
document.addEventListener("scroll", function () {
    const fadeElement = document.body;
    const scrollTop = window.scrollY; 
    const docHeight = document.documentElement.scrollHeight; 
    const winHeight = window.innerHeight; 
    const fadeHeight = docHeight - winHeight; 
    const fadeProgress = Math.min(scrollTop / fadeHeight, 1); 

    fadeElement.style.background = `
        linear-gradient(
            rgba(255, 182, 193, 1) ${fadeProgress * 33}%, /* Light Pink (Cherry Blossom) */
            rgba(144, 238, 144, 1) ${fadeProgress * 33 + 34}%, /* Light Green (Fresh Grass) */
            rgba(255, 255, 102, 1) ${fadeProgress * 33 + 67}% /* Soft Yellow (Sunshine) */
        )
    `;
});

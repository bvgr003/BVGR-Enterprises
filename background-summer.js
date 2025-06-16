document.addEventListener("scroll", function () {
    const fadeElement = document.body;
    const scrollTop = window.scrollY; 
    const docHeight = document.documentElement.scrollHeight; 
    const winHeight = window.innerHeight; 
    const fadeHeight = docHeight - winHeight; 
    const fadeProgress = Math.min(scrollTop / fadeHeight, 1); 

    fadeElement.style.background = `
        linear-gradient(
            to bottom,
            rgba(255, 105, 97, 1) ${fadeProgress * 33}%,         /* Watermelon Red */
            rgba(255, 223, 0, 1) ${fadeProgress * 33 + 34}%,     /* Bright Yellow (Sunshine) */
            rgba(135, 206, 235, 1) ${fadeProgress * 33 + 67}%    /* Sky Blue */
        )
    `;
});


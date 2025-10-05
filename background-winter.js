document.addEventListener("scroll", function() {
    const fadeElement = document.body;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const fadeHeight = docHeight - winHeight;
    const fadeProgress = Math.min(scrollTop / fadeHeight, 1);

    fadeElement.style.background = `
        linear-gradient(
            rgba(173, 216, 230, 1) ${fadeProgress * 33}%, /* Icy Blue */
            rgba(192, 192, 192, 1) ${fadeProgress * 33 + 34}%, /* Silver */
            rgba(34, 139, 34, 1) ${fadeProgress * 33 + 67}% /* Evergreen */
        )
    `;
});
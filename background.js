document.addEventListener("scroll", function () {
    const fadeElement = document.body;
    const scrollTop = window.scrollY; // Current scroll position
    const docHeight = document.documentElement.scrollHeight; // Total document height
    const winHeight = window.innerHeight; // Height of the visible window
    const fadeHeight = docHeight - winHeight; // Scrollable height
    const fadeProgress = Math.min(scrollTop / fadeHeight, 1); // Calculate scroll progress (0 to 1)

    // Apply hard transition between DarkSlateGray, Grey, and White (darker shades)
    fadeElement.style.background = `
        linear-gradient(
            rgba(23, 38, 38, 1) ${fadeProgress * 33}%, /* DarkSlateGray (darker) */
            rgba(64, 64, 64, 1) ${fadeProgress * 33 + 34}%, /* Dark Grey */
            rgba(235, 235, 235, 1) ${fadeProgress * 33 + 67}% /* Light Grey instead of pure white */
        )
    `;
});


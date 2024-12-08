// JavaScript for dynamic fade effect
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY; // Get current scroll position
            const fadePoint = 100; // Start fading at this scroll position
            const maxFadePoint = 600; // Fully faded at this position

            // Calculate the interpolation factor between 0 (start) and 1 (end)
            let fadeFactor = (scrollY - fadePoint) / (maxFadePoint - fadePoint);
            fadeFactor = Math.max(0, Math.min(1, fadeFactor)); // Clamp between 0 and 1

            // Start and end colors in RGB
            const startColor = { r: 47, g: 79, b: 79 }; // darkslategray
            const endColor = { r: 119, g: 136, b: 153 }; // lighter darkslategray (#778899)

            // Interpolate between the two colors
            const currentColor = {
                r: Math.round(startColor.r + fadeFactor * (endColor.r - startColor.r)),
                g: Math.round(startColor.g + fadeFactor * (endColor.g - startColor.g)),
                b: Math.round(startColor.b + fadeFactor * (endColor.b - startColor.b))
            };

            // Apply the calculated color as the background
            document.body.style.backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
        });
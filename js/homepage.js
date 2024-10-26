
document.addEventListener('DOMContentLoaded', function () {
    var dataText = ["A creative Software Engineer", "UI / UX Designer", "A creative Software Engineer", "FULLSTACK DEVELOPER", "Web Developer"];

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            let letter = text[i];

            // Color specific words while typing
            if (text.includes("Software Engineer") && i >= text.indexOf("Software Engineer")) {
                document.querySelector("h3").innerHTML += `<span class="indigo-color">${letter}</span>`;
            } else if (text.includes("Designer") && i >= text.indexOf("Designer")) {
                document.querySelector("h3").innerHTML += `<span class="indigo-color">${letter}</span>`;
            } else if (text.includes("DEVELOPER") && i >= text.indexOf("DEVELOPER")) {
                document.querySelector("h3").innerHTML += `<span class="indigo-color">${letter}</span>`;

            } else if (text.includes("Developer") && i >= text.indexOf("Developer")) {
                document.querySelector("h3").innerHTML += `<span class="indigo-color">${letter}</span>`;
            } else {
                document.querySelector("h3").innerHTML += letter;
            }

            // Continue typing next letter
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback === 'function') {
            // Call callback after text is done typing
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (i < dataText.length) {
            document.querySelector("h3").innerHTML = ""; // Clear previous text
            typeWriter(dataText[i], 0, function () {
                StartTextAnimation(i + 1); // Proceed to next text after typing
            });
        } else {
            // Reset to the first text after all are done
            setTimeout(function () {
                StartTextAnimation(0);
            }, 1000); // Delay before restarting
        }
    }

    StartTextAnimation(0); // Start the animation loop
});

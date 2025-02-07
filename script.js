document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const body = document.body;

    // Load theme preference from local storage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // Save preference in local storage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });

    // Update button text dynamically (Optional)
    function updateButtonText() {
        if (body.classList.contains("light-mode")) {
            themeToggleBtn.textContent = "🌙 Dark Mode";
        } else {
            themeToggleBtn.textContent = "☀️ Light Mode";
        }
    }

    updateButtonText(); // Call once on page load
    themeToggleBtn.addEventListener("click", updateButtonText); // Update on toggle
});

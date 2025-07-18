// Grabbing the theme toggle button from the DOM and ensuring it's not null
const themeToggleBtn = document.getElementById('theme-toggle-btn') as HTMLButtonElement;

// Check if there is a stored theme in localStorage, default to 'light' if not found
const currentTheme: string = localStorage.getItem('theme') || 'light';

// Set the initial theme based on the stored value or default to 'light'
document.documentElement.setAttribute('data-theme', currentTheme);

// Set the toggle button text based on the current theme
if (currentTheme === 'dark') {
    themeToggleBtn.textContent = 'Light Mode';
} else {
    themeToggleBtn.textContent = 'Dark Mode';
}

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', () => {
    // Determine the current theme and toggle between light and dark
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    
    // Apply the new theme to the document root
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update the button text to reflect the current theme
    themeToggleBtn.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    
    // Store the selected theme in localStorage
    localStorage.setItem('theme', newTheme);
});

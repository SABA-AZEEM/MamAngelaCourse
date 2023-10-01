
  // Function to toggle the theme
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");
    
    // Toggle between 'dark' and 'light' themes
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    // Update the data-bs-theme attribute
    html.setAttribute("data-bs-theme", newTheme);
  }

  // Add a click event listener to the button
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  themeToggleBtn.addEventListener("click", toggleTheme);

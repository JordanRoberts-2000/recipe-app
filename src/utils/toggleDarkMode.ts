const toggleDarkMode = () => {
  const root = document.documentElement;
  const isDarkMode = root.classList.contains("dark");
  root.classList.toggle("dark", !isDarkMode);
  localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
};

export default toggleDarkMode;

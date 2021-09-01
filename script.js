window.onload = () => {
  // Variables
  const darkIcon = document.querySelector(".toggle-icon");
  const toggleCircle = document.querySelector(".toggle-circle");

  // Functions
  function toggleDarkMode() {
    if (darkIcon.classList.contains("color-toggle")) {
      darkIcon.classList.remove("color-toggle");
      toggleCircle.classList.remove("float-left");
      setDarkMode();
    } else {
      darkIcon.classList.add("color-toggle");
      toggleCircle.classList.add("float-left");
      setLightMode();
    }
  }

  //Event listeners

  darkIcon.addEventListener("click", toggleDarkMode);
};

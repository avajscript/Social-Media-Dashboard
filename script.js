// Imports

import { colorVariables, darkColors, lightColors } from "./variables.js";
window.onload = () => {
  // Variables
  const darkIcon = document.querySelector(".toggle-icon");
  const toggleCircle = document.querySelector(".toggle-circle");

  // Iterates through list of color variables and colors to change them to using document root
  function setDarkMode() {
    for (let colorIndex in colorVariables) {
      document.documentElement.style.setProperty(
        colorVariables[colorIndex],
        darkColors[colorIndex]
      );
    }
  }
  // Iterates through list of color variables and colors to change them to using document root
  function setLightMode() {
    for (let colorIndex in colorVariables) {
      document.documentElement.style.setProperty(
        colorVariables[colorIndex],
        lightColors[colorIndex]
      );
    }
  }

  // Functions
  function toggleDarkMode() {
    if (darkIcon.classList.contains("color-toggle")) {
      darkIcon.classList.remove("color-toggle");
      toggleCircle.classList.remove("float-left");
      setLightMode();
    } else {
      darkIcon.classList.add("color-toggle");
      toggleCircle.classList.add("float-left");
      setDarkMode();
    }
  }

  //Event listeners

  darkIcon.addEventListener("click", toggleDarkMode);
};

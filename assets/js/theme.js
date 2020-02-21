const darkTheme = {
  "--accent-color": "#4acaa8",
  "--background-color": "#343737",
  "--active-scroll-background": "#f0ffff",
  "--color-text": "white",
  "--sidebar-color": "#444c48"
};

const lightTheme = {
  "--accent-color": "#4acaa8",
  "--background-color": "#f0ffff",
  "--active-scroll-background": "#f0ffff",
  "--color-text": "#777",
  "--sidebar-color": "#4acaa8"
};

let currentTheme = lightTheme;

function applyTheme(theme) {
  let root = document.documentElement;
  root.style.setProperty("--accent-color", theme["--accent-color"]);
  root.style.setProperty("--background-color", theme["--background-color"]);
  root.style.setProperty(
    "--active-scroll-background",
    theme["--active-scroll-background"]
  );
  root.style.setProperty("--color-text", theme["--color-text"]);
  root.style.setProperty("--sidebar-color", theme["--sidebar-color"]);
  currentTheme = theme;
}

function toggleTheme() {
  if (currentTheme == lightTheme) {
    applyTheme(darkTheme);
  } else {
    applyTheme(lightTheme);
  }
}

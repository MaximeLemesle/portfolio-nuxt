export default defineNuxtPlugin(() => {
  if (typeof window !== "undefined") {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (userPrefersDark) {
      document.documentElement.classList.add("dark");
    }

    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }
});
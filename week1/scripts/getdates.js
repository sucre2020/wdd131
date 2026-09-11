document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
  }
});

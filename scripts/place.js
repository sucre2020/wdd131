document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
  }

  const windChillValue = document.getElementById("windChillValue");
  const tempC = 28;
  const windSpeedKmh = 8;

  if (windChillValue) {
    if (tempC <= 10 && windSpeedKmh > 4.8) {
      windChillValue.textContent = `${calculateWindChill(tempC, windSpeedKmh).toFixed(1)}°C`;
    } else {
      windChillValue.textContent = "N/A";
    }
  }
});

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, United States",
    dedicated: "1846, May, 1",
    area: 26842,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119640,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Papeete French Polynesia",
    location: "Papeete, Tahiti, French Polynesia",
    dedicated: "1983, October, 27",
    area: 9222,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
];

function getTempleYear(temple) {
  return Number(temple.dedicated.split(",")[0]);
}

function renderTemples(templesToRender) {
  const gallery = document.getElementById("temple-gallery");
  if (!gallery) return;

  gallery.innerHTML = templesToRender
    .map(
      (temple) => `
        <article class="temple-card">
          <img
            src="${temple.imageUrl}"
            alt="${temple.templeName} temple"
            loading="lazy"
          />
          <div class="temple-card-body">
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
          </div>
        </article>
      `
    )
    .join("");
}

function filterTemples(filterValue) {
  const filtered = temples.filter((temple) => {
    const year = getTempleYear(temple);

    switch (filterValue) {
      case "old":
        return year < 1900;
      case "new":
        return year > 2000;
      case "large":
        return temple.area > 90000;
      case "small":
        return temple.area < 10000;
      case "home":
      default:
        return true;
    }
  });

  renderTemples(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });
  }

  const navLinks = document.querySelectorAll(".nav-menu a[data-filter]");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filterValue = link.dataset.filter;
      navLinks.forEach((item) => item.classList.toggle("active", item === link));
      filterTemples(filterValue);
    });
  });

  filterTemples("home");
});

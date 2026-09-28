const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productMap = new Map(products.map((product) => [product.id, product.name]));

  const productId = params.get("product") || "Unknown product";
  const productName = productMap.get(productId) || productId;
  const rating = params.get("rating") || "Not provided";
  const installDate = params.get("installDate") || "Not provided";
  const features = params.getAll("features");
  const reviewText = params.get("review") || "No written review provided.";
  const reviewerName = params.get("name") || "Anonymous";

  const countValue = Number(localStorage.getItem("reviewCount") || "0") + 1;
  localStorage.setItem("reviewCount", String(countValue));

  document.getElementById("summary-product").textContent = productName;
  document.getElementById("summary-rating").textContent = `${rating} / 5 star${Number(rating) === 1 ? "" : "s"}`;
  document.getElementById("summary-date").textContent = installDate;
  document.getElementById("summary-features").textContent = features.length ? features.join(", ") : "No features selected";
  document.getElementById("summary-name").textContent = reviewerName;
  document.getElementById("summary-review").textContent = reviewText;
  document.getElementById("review-count").textContent = String(countValue);
});

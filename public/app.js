//filter search for opportunities

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const monthSelect = document.getElementById("monthSelect");
  const typeSelect = document.getElementById("typeSelect");
  const opportunities = document.querySelectorAll(".opportunity");

  searchInput.addEventListener("input", filterOpportunities);
  monthSelect.addEventListener("change", filterOpportunities);
  typeSelect.addEventListener("change", filterOpportunities);

  function filterOpportunities() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedMonth = monthSelect.value.toLowerCase();
    const selectedType = typeSelect.value.toLowerCase();

    opportunities.forEach(function (opportunity) {
      const opportunityTitle = opportunity
        .querySelector("h2")
        .textContent.toLowerCase();
      const opportunityMonth = opportunity
        .querySelector(".month_container p")
        .textContent.toLowerCase();

      let opportunityType;
      if (opportunity.classList.contains("fellowship")) {
        opportunityType = "fellowship";
      } else if (opportunity.classList.contains("internship")) {
        opportunityType = "internship";
      } else if (opportunity.classList.contains("conference")) {
        opportunityType = "conference";
      } else {
        opportunityType = "";
      }

      if (
        (searchTerm === "" || opportunityTitle.includes(searchTerm)) &&
        (selectedMonth === "" || opportunityMonth === selectedMonth) &&
        (selectedType === "" || opportunityType === selectedType)
      ) {
        opportunity.style.display = "flex";
      } else {
        opportunity.style.display = "none";
      }
    });
  }
});

//filter search for all the months

document.addEventListener("DOMContentLoaded", function () {
  const monthSelect = document.getElementById("monthSelect");
  const opportunities = document.querySelectorAll(".opportunity");

  monthSelect.addEventListener("change", function () {
    const selectedMonth = monthSelect.value.toLowerCase();

    opportunities.forEach((opportunity) => {
      const openingMonth = opportunity
        .querySelector("p")
        .textContent.toLowerCase();
      if (openingMonth.includes(selectedMonth)) {
        opportunity.style.display = "flex";
      } else {
        opportunity.style.display = "none";
      }
    });
  });
});

//dark mode/brightmode toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeToggleDarkIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  themeToggleLightIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggleDarkIcon.classList.remove("hidden");
    themeToggleLightIcon.classList.add("hidden");
  } else {
    localStorage.setItem("theme", "light");
    themeToggleDarkIcon.classList.add("hidden");
    themeToggleLightIcon.classList.remove("hidden");
  }
});

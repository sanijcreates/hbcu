// Function to filter programs based on both search input and selected month
function filterPrograms() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const selectedMonth = document.getElementById("monthSelect").value.toLowerCase();
  const opportunities = document.getElementsByClassName("opportunity");

  // Loop through all programs and hide those that don't match the search input or selected month
  for (let i = 0; i < opportunities.length; i++) {
    const programName = opportunities[i].querySelector("h2").innerText.toLowerCase();
    const programMonth = opportunities[i].querySelector(".text-gray-600").innerText.toLowerCase();
    if ((searchValue === "" || programName.includes(searchValue)) &&
        (selectedMonth === "" || programMonth.includes(selectedMonth))) {
      opportunities[i].style.display = "block";
    } else {
      opportunities[i].style.display = "none";
    }
  }
}



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

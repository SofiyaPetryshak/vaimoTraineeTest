
const burgerIcon = document.getElementById("burger_icon");
const searchIcon = document.getElementById("search_icon");
const closeSearchIcon = document.getElementById("close_search_icon");
const searchBar = document.getElementById("search_bar");
const header = document.getElementById("header");
const closeBurger = document.getElementById("close_burger");

const aboutUs = document.getElementById("about_us");
const categories = document.getElementById("categories");
const help = document.getElementById("help");
const payments = document.getElementById("payments");

const containerAboutUs = document.getElementById("container_aboutus");
const containerCategories = document.getElementById("container_categories");
const containerHelp = document.getElementById("container_help");
const containerPayments = document.getElementById("container_payments");

aboutUs.addEventListener("click", () => {
  containerAboutUs.classList.toggle("toggled");
});
categories.addEventListener("click", () => {
  containerCategories.classList.toggle("toggled");
});
help.addEventListener("click", () => {
  containerHelp.classList.toggle("toggled");
});
payments.addEventListener("click", () => {
  containerPayments.classList.toggle("toggled");
});

searchIcon.addEventListener("click", () => {
  if (searchBar.classList.contains("input-mobile-show")) {
    searchBar.remove();
  } else {
    header.append(searchBar);
  }
  searchBar.classList.toggle("input-mobile-show");
});

burgerIcon.addEventListener("click", () => {
  document.getElementById("overlay").classList.add("burger-opened");
  document.getElementById("burger_screen").classList.add("burger-opened");
});
closeBurger.addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("burger-opened");
  document.getElementById("burger_screen").classList.remove("burger-opened");
});

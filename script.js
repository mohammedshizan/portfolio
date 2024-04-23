const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("sidemenu");

function openTab(tabname, event) {
    for (let item of tabLinks) {
        item.classList.remove("active-link");
    }
    for (let item of tabContents) {
        item.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openMenu() {
    if (sideMenu) {
        sideMenu.style.right = "0";
    }
}

function closeMenu() {
    if (sideMenu) {
        sideMenu.style.right = "-200px";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Check if the element exists before adding event listener
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");

    if (openMenuBtn) {
        openMenuBtn.addEventListener("click", openMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", closeMenu);
    }

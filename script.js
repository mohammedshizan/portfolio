var tabLinks = document.getElementsByClassName("tab-links"),
tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for (item of tabLinks) {
        item.classList.remove("active-link");
    }
    for (item of tabContents) {
        item.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var SideMenu = document.getElementById("sidemenu");

// On openMenu function call
function openMenu(){
    if (SideMenu) {
        SideMenu.style.right = "0";
    }
}

// On closeMenu function call
function closeMenu(){
    if (SideMenu) {
        SideMenu.style.right = "-200px";
    }
}



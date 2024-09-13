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





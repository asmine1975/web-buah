const MenuList = document.getElementById("list-menu");
const menuBar = document.getElementById("list");

MenuList.addEventListener("click",() => {
    menuBar.classList.toggle("hiden");
});
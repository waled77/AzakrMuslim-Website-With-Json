var headerList = document.querySelector('.header ul');
var menuIcon = document.querySelector('.header .menu-bar');

console.log(headerList,menuIcon)

menuIcon.addEventListener('click', toggleActiveClass);

function toggleActiveClass() {
    headerList.classList.toggle('active');
}

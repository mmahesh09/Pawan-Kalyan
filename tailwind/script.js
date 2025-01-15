function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    menu.classList.toggle('active');
}
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Toggle the "open" class on both menu and icon
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


  document.querySelectorAll('.level-bar').forEach(bar => {
    const progress = bar.getAttribute('data-level');
    const progressElement = bar.querySelector('.level-progress');
    progressElement.style.width = `${progress}%`;
});
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('list-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('show');
    // navLinks.classList.toggle("hidden");
  });
});
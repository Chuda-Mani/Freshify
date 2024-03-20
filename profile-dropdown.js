const profileDropdown = document.getElementById('profile-dropdown');
const dropdownToggle = document.getElementById('dropdown-toggle');

dropdownToggle.addEventListener('click', () => {
  profileDropdown.classList.toggle('show'); // Toggle 'show' class for visibility
});

// Optional: Close the dropdown menu when clicked outside the profile area
document.addEventListener('click', (event) => {
  if (!event.target.matches('.profile *') && profileDropdown.classList.contains('show')) {
    profileDropdown.classList.remove('show');
  }
});

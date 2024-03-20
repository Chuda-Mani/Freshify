const profileName = document.getElementById('profile-name'); // Reference profile name element
const profileBio = document.getElementById('profile-bio'); // Reference profile bio element
const profileLocation = document.getElementById('profile-location'); // Reference profile location element
const profileEmail = document.getElementById('profile-email'); // Reference profile email element
const profilePhone = document.getElementById('profile-phone'); // Reference profile phone element

const form = document.getElementById('profile-form'); // Reference the form element

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = document.getElementById('name').value;
  const bio = document.getElementById('bio').value;
  const location = document.getElementById('location').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Update profile information on the page
  profileName.textContent = name;
  profileBio.textContent = bio;
  profileLocation.textContent = location ? `Location: ${location}` : ''; // Handle optional location
  profileEmail.textContent = email ? `Email: ${email}` : ''; // Handle optional email
  profilePhone.textContent = phone ? `Phone: ${phone}` : ''; // Handle optional phone

  // Optional: Show a success message (can be improved with styling)
  alert('Profile updated successfully!');
});

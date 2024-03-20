const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const accountTypeElement = document.getElementById('account-type');
const joinedDateElement = document.getElementById('joined-date');
const updateForm = document.getElementById('update-account-form');

function fetchUserData() {
  // Replace with your actual API call or data fetching logic
  fetch('/api/user-data')
    .then(response => response.json())
    .then(data => {
      usernameElement.textContent = data.username;
      emailElement.textContent = data.email;
      accountTypeElement.textContent = data.accountType;
      joinedDateElement.textContent = data.joinedDate;
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      // Handle errors gracefully, e.g., display a message to the user
    });
}

updateForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const newEmail = document.getElementById('email').value;
  const currentPassword = document.getElementById('current-password').value;
  const newPassword = document.getElementById('new-password').value;

  // Send update request to server-side with newEmail, currentPassword, newPassword (if provided)
  fetch('/api/update-account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: newEmail,
      currentPassword,
      newPassword
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Account updated successfully!');
      // Update displayed fields on successful update
      emailElement.textContent = newEmail;
      // You can similarly update other fields based on the response data
    } else {
      alert('Error updating account: ' + data.message);
    }
  })
  .catch(error => {
    console.error('Error updating account:', error);
    alert('An error occurred. Please try again later.');
  });
});

fetchUserData();

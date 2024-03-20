const autoDeleteSelect = document.getElementById('auto-delete');

// Enable the select element for editing
autoDeleteSelect.disabled = false;

autoDeleteSelect.addEventListener('change', () => {
  const selectedOption = autoDeleteSelect.value;

  // Send request to server to update user's auto-delete preference
  fetch('/api/account/auto-delete', {
    method: 'POST',
    body: JSON.stringify({ autoDeleteAfter: selectedOption })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('Auto-delete preference updated successfully!');
      // Display a success message to the user
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Auto-delete preference updated!';
      successMessage.classList.add('success-message'); // Add CSS class for styling
      autoDeleteSelect.parentElement.appendChild(successMessage);
      setTimeout(() => successMessage.remove(), 3000); // Remove message after 3 seconds
    } else {
      console.error('Error updating auto-delete preference:', data.message);
      alert('An error occurred. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error sending update request:', error);
    alert('An error occurred. Please try again later.');
  });
});

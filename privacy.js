const profileVisibilitySelect = document.getElementById('profile-visibility');
const showEmailCheckbox = document.getElementById('show-email');
const showPhoneCheckbox = document.getElementById('show-phone');
const postVisibilitySelect = document.getElementById('post-visibility');
const personalizationCheckbox = document.getElementById('personalization');
const marketingCheckbox = document.getElementById('marketing');
const manageIntegrationsButton = document.querySelector('button[disabled]'); 
manageIntegrationsButton.disabled = false;


// Update profile visibility on selection change
profileVisibilitySelect.addEventListener('change', () => {
  const selectedValue = profileVisibilitySelect.value;
  // Send request to server to update profile visibility
  updateSetting('/api/privacy/profile-visibility', { visibility: selectedValue })
    .then(response => {
      if (response.success) {
        console.log('Profile visibility updated successfully!');
        // Display a success message to the user (optional)
      } else {
        console.error('Error updating profile visibility:', response.error);
        // Display an error message to the user
      }
    })
    .catch(error => {
      console.error('Error sending update request:', error);
      // Display a generic error message to the user
    });
});

// Similar logic for other settings (replace placeholders with actual API calls)
showEmailCheckbox.addEventListener('change', () => {
  const showEmail = showEmailCheckbox.checked;
  updateSetting('/api/privacy/public-info', { showEmail });
});

showPhoneCheckbox.addEventListener('change', () => {
  const showPhone = showPhoneCheckbox.checked;
  updateSetting('/api/privacy/public-info', { showPhone });
});

postVisibilitySelect.addEventListener('change', () => {
  const selectedValue = postVisibilitySelect.value;
  updateSetting('/api/privacy/sharing', { postVisibility: selectedValue });
});

personalizationCheckbox.addEventListener('change', () => {
  const useForPersonalization = personalizationCheckbox.checked;
  updateSetting('/api/privacy/data-sharing', { useForPersonalization });
});

marketingCheckbox.addEventListener('change', () => {
  const receiveMarketing = marketingCheckbox.checked;
  updateSetting('/api/privacy/data-sharing', { receiveMarketing });
});

// Placeholder function for sending update requests to the server
function updateSetting(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());
}

// Functionality for managing third-party integrations (replace with actual logic)
manageIntegrationsButton.addEventListener('click', () => {
  console.log('Manage third-party integrations clicked!');
  // Implement logic to display connected apps, manage access, revoke permissions (server-side interaction needed)
});

// Fetch initial settings from the server on page load (optional)
fetch('/api/privacy/settings')
  .then(response => response.json())
  .then(data => {
    // Update UI elements based on fetched settings (e.g., select options, checkbox states)
  })
  .catch(error => {
    console.error('Error fetching initial settings:', error);
  });

// Generate a random 4-digit CAPTCHA code
function generateCaptcha() {
  var captcha = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  document.getElementById('captchaText').textContent = captcha;
  return captcha;
}

// Validate the CAPTCHA code
function validateCaptcha() {
  var userInput = document.getElementById('captcha').value;
  var captchaCode = document.getElementById('captchaText').textContent;

  if (userInput === captchaCode) {
    window.location.href = '/home'; // Redirect to the "/home" directory
  } else {
    alert('CAPTCHA code is incorrect!');
    generateCaptcha(); // Generate a new CAPTCHA
  }
}

// Attach the validation function to the form submission event
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  validateCaptcha();
});

// Generate the initial CAPTCHA on page load
generateCaptcha();
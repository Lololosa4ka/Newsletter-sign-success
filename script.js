
document.getElementById('subscribe').addEventListener('click', function() {
    // Get the email input value
    var email = document.getElementById('email-input').value;
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the regular expression
    if (!emailRegex.test(email)) {
    // If not valid, display the error message
    
    let errorEmail = document.getElementById('error-email');
    errorEmail.style.display = 'block';
    let errorInput = document.getElementById('email-input');
    errorInput.classList.add('error-input');

    } else {
    // If valid, hide the error message
    document.getElementById('error-email').style.display = 'none';
    document.getElementById('success').style.display = 'flex';
    let rightEmail = document.getElementById('email-input').value;
    document.getElementById('right-email').textContent = rightEmail;
    console.log(rightEmail);

    }
});
document.getElementById('dismiss').addEventListener('click', function() {
    document.getElementById('success').style.display = 'none';
    document.getElementById('email-input').value = '';
})
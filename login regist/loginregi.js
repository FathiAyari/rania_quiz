const registerlink = document.querySelector('.register-link');
const registrationForm = document.getElementById('registrationForm');
////registerlink.addEventListener('click', () => {
    /////window.location.href = 'todo.html'; // Redirect to registration page
//});

const loginLink = document.querySelector('.login-link');
/////**//////loginLink.addEventListener('click', () => {
    //////window.location.href = 'login.html'; // Redirect to login page
////});

const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.querySelector('input[name="name"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save user's registration information to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Display welcome message
    alert("Welcome! You are already registered.");

    // Redirect the user to the login page
    window.location.href = 'homepage.html';
});

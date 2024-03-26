
const form = document.getElementById('myForm');

// Attach an event listener for the form submit event
form.addEventListener('submit', function(event) {
    const user = document.getElementById("user");
    localStorage.setItem("user",user.value);

    event.preventDefault();
    window.location.href = '../home page/homepage2.html';
    // Your code to execute when the form is submitted
    console.log('Form submitted!');
});